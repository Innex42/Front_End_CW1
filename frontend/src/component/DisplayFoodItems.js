import React from 'react';
import FoodItem from './FoodItem';


const DisplayFoodItems = ({recipes }) => {
   return (
       <div>
           {recipes.map((recipe, index) => {
               return (
                <FoodItem recipes={recipe} key={index} />
               )
           })}

       </div>
   );
};
 
export default DisplayFoodItems;