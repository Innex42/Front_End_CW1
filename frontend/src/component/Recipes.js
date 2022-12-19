import React from "react";
import { recipes } from "../data/data";
import FetchRecipes from "./FetchRecipes";
import Search from "./Search";

const Recipes = () => {
    return(
        <>
            <div align="center">
                <h1>Recipes</h1>
            </div>
            
            <Search details={recipes} />
                {/*<FetchRecipes /> */}
        </>
    );
};

export default Recipes;