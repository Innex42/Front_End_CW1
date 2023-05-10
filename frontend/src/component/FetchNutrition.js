import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition";

const FetchData = ({ query }) => {
    const [nutrition, setNutrition] = useState([{
        sugar_g: " ",
        fiber_g: " ",
        serving_size_g: " ",
        sodium_mg: " ",
        name: " ",
        potassium_mg: " ",
        fat_saturated_g: " ",
        fat_total_g: " ",
        calories: " ",
        cholesterol_mg: " ",
        protein_g: " ",
        carbohydrates_total_g: " ",
    }]);



    const fetchData = useCallback(() => {
        const url =
        "https://api.calorieninjas.com/v1/nutrition?query=" + query;
        console.log(url);
        const options = {
        method: "GET",
        headers: {
            "X-API-Key": "50+FEGyNTMqv25/pj7PWzg==VCcJAPp11iNhgGZK",
        },
    };
    fetch(url, options)
        .then((response) => response.json())
        .then((incomingData) => {
            console.log(incomingData);
                setNutrition(incomingData.items);
        
        })
        .catch((err) => console.error(err));
    }, [query]);

    useEffect(() => {
        fetchData();
    }, [fetchData, query]);

    return (
        
        <div>
            <Nutrition item={nutrition} />
        </div>
    );
};
export default FetchData;