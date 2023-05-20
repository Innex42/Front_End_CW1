import React, { useEffect, useState, useCallback } from "react";
import Search from './Search';

const FetchRecipes = () => {
    const [recipes, setRecipes] = useState([{
        id: "",
        name: "",
        description: "",
        instructions: "",
        category:"",
        prepTime:"",
        cookTime:"",
        vegetarian: "",
        glutenFree: "",
        rating: "",
        numOfServings: "",
        nutrition: {
            sugar_g: "",
            fiber_g: "",
            serving_size_g: "",
            sodium_mg: "",
            potassium_mg: "",
            fat_saturated_g: "",
            fat_total_g: "",
            calories: "",
            cholesterol_mg: "",
            protein_g: "",
            carbohydrates_total_g: "",
        },
        ingredientsInRecipe: [{
            ingredientID: "",
            ingredientName: "",
            measurementSize: "",
            measurementUnit: "",
            prepStyle: "",
            getNutrition: "",
        }]
    }]);


    

    const fetchRecipes = useCallback(() => {
        const url = "http://localhost:3001/";
        const options = { method: "GET"};
            console.log(url);
        fetch(url, options)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(incomingData);
                setRecipes(incomingData.recipes);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    
    return (
        <div>
            <Search items={recipes}/>
        </div>
    );
};
export default FetchRecipes;