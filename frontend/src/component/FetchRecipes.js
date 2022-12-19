import React, { useEffect, useState, useCallback } from "react";
import Search from './Search';

const FetchRecipes = () => {
    const [recipes, setRecipes] = useState([{
        id: null,
        name: "",
        description: "",
        instructions: "",
        category:"",
        prepTime:"",
        cookTime:"",
        vegetarian: null,
        glutenFree: null,
        rating: null,
        numOfServings: null,
        nutrition: {
            sugar_g: null,
            fiber_g: null,
            serving_size_g: null,
            sodium_mg: null,
            potassium_mg: null,
            fat_saturated_g: null,
            fat_total_g: null,
            calories: null,
            cholesterol_mg: null,
            protein_g: null,
            carbohydrates_total_g: null,
        },
        ingredientsInRecipe: [{
            ingredientID: null,
            ingredientName: "",
            measurementSize: null,
            measurementUnit: "",
            prepStyle: "",
            getNutrition: null,
        }]
    }]);

    const fetchRecipes = useCallback(() => {
        const url = "http://localhost:3001";
        fetch(url)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(incomingData)
                setRecipes(incomingData);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    return (
        <div>
            {console.log(recipes)}
            <Search items={recipes}/>
        </div>
    )
}
export default FetchRecipes;