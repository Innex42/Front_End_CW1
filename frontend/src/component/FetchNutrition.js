import React, {useEffect, useState, useCallback} from "react";
import Nutrition from "./Nutrition";


//figure it out later
const FetchData = ({query}) => {
    const [nutrition, setNutrition] = useState(
        {
            sugar_g: " ",
            fiber_g: " ",
            serving_size_g: " ",
            sodium_mg: " ",
            name: " " ,
            potassium_mg: " ",
            fat_saturated_g: " ",
            fat_total_g: " ",
            calories: " ",
            cholesterol_mg: " ",
            protein_g: " ",
            carbohydrates_total_g: " ",
        },
    );
    const fetchExternal = useCallback(() =>{
        const url = "https://calorieninjas.p.rapidapi.com/v1/nutrition?query="+query;
        console.log(url);
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":"8679798c69msh8880aecbdfdc98fp1efa82jsn893f7db6f2b9",
                "X-RapidAPI-Host" :  "calorieninjas.p.rapidapi.com",
            },
        };
        fetch(url,options)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(incomingData)
                setNutrition(incomingData.items[0])
            });
    }, [query]);
    useEffect(() => {
        fetchExternal();
    }, [FetchData, query]);
    return(
        <>
            <h2>Nutrition data</h2>
            <div>
                <Nutrition item={nutrition}/>
            </div>
        </>
    );
};
export default FetchData;