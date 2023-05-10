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
        fetch(url)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(url);
                console.log(incomingData)
                setRecipes(incomingData);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        fetchRecipes();
        
    }, [fetchRecipes]);

    console.log(recipes);
    return (
        <div>
            {console.log(recipes)}
            <Search items={recipes}/>
        </div>
    )
}
export default FetchRecipes;