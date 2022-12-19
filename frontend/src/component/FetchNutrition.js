import React, { useEffect, useState, useCallback } from "react";


const FetchData = ({ query }) => {
    

    const [nutrition, setNutrition] = useState([
        {
            sugar_g: "",
            fiber_g: "",
            serving_size_g: "",
            sodium_mg: "",
            name: "",
            potassium_mg: "",
            fat_saturated_g: "",
            fat_total_g: "",
            calories: "",
            cholesterol_mg: "",
            protein_g: " ",
            carbohydrates_total_g: "",
        }],
    );
    let [totalNutrition, setTotalNutrition] = useState(
        {
            sugar_g: "",
            fiber_g: "",
            serving_size_g: "",
            sodium_mg: "",
            name: "",
            potassium_mg: "",
            fat_saturated_g: "",
            fat_total_g: "",
            calories: "",
            cholesterol_mg: "",
            protein_g: " ",
            carbohydrates_total_g: "",
        },
    );
    const fetchExternal = useCallback(() => {

        const url = "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
        console.log(url);
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "8679798c69msh8880aecbdfdc98fp1efa82jsn893f7db6f2b9",
                "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
            },
        }
        fetch(url, options)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(incomingData)
                setNutrition(incomingData)
            });
            

    }, [query]);

    const addNutrition = useCallback(() => {
        for (let i = 0; i < nutrition.length; i++) {
            if (i === 0) {
                setTotalNutrition(nutrition[i]);
            } else {
                setTotalNutrition(totalNutrition + nutrition[i]);
            }
        };
    },[nutrition, totalNutrition])

    useEffect(() => {
        fetchExternal();
        addNutrition();
    }, [addNutrition, fetchExternal, query]);

    

    //console.log(totalNutrition);

    return (
        <>
            <div>
                <ul>
                    <li><b>Sugar: </b>{totalNutrition.sugar_g}g </li>
                    <li><b>Fiber: </b>{totalNutrition.fiber_g}g </li>
                    <li><b>Serving Size: </b>{totalNutrition.serving_size_g}g </li>
                    <li><b>Sodium: </b>{totalNutrition.sodium_mg}mg </li>
                    <li><b>Potassium: </b>{totalNutrition.potassium_mg}mg</li>
                    <li><b>Saturated Fat: </b>{totalNutrition.fat_saturated_g}g</li>
                    <li><b>Total Fat: </b>{totalNutrition.fat_total_g}g</li>
                    <li><b>Calories: </b>{totalNutrition.calories}Cal</li>
                    <li><b>Cholesterol: </b>{totalNutrition.cholesterol_mg}mg</li>
                    <li><b>Protein: </b>{totalNutrition.protein_g}g</li>
                    <li><b>Total Carbohydrates: </b>{totalNutrition.carbohydrates_total_g}g</li>
                </ul>
            </div>
        </>
    );
};
export default FetchData;