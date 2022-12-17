import React from "react";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = () => {
    return(
        <>
            <div align="center">
                <h1>Shopping List</h1>
                <br/>
                <br/>
            </div>
            
            <ShoppingListItem/>
            
        </>
    );
};

export default ShoppingList;