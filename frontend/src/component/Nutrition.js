import React from "react";
const Nutrition = ({ item }) => {
    let sugar_g_total=0, fiber_g_total=0,serving_size_g_total=0,sodium_mg_total=0,potassium_mg_total=0, fat_saturated_g_total=0, fat_total_g_total=0, calories_total=0, cholesterol_mg_total=0, protein_g_total=0, carbohydrates_total_g_total=0
    for (let i = 0; i < item.length; i++){
        sugar_g_total=sugar_g_total+item[i].sugar_g;
        fiber_g_total = fiber_g_total +item[i].fiber_g;
        serving_size_g_total = serving_size_g_total = item[i].serving_size_g;
        sodium_mg_total = sodium_mg_total = item[i].sodium_mg;
        potassium_mg_total = potassium_mg_total = item[i].potassium_mg;
        fat_saturated_g_total = fat_saturated_g_total = item[i].fat_saturated_g;
        fat_total_g_total = fat_total_g_total = item[i].fat_total_g;
        calories_total = calories_total = item[i].calories;
        cholesterol_mg_total = cholesterol_mg_total = item[i].cholesterol_mg;
        protein_g_total= protein_g_total = item[i].protein_g;
        carbohydrates_total_g_total =carbohydrates_total_g_total = item[i].carbohydrates_total_g;
    }
    return (
        <div>
                <ul>
                    <li><b>Sugar: </b>{sugar_g_total}g </li>
                    <li><b>Fiber: </b>{fiber_g_total}g </li>
                    <li><b>Serving Size: </b>{serving_size_g_total}g </li>
                    <li><b>Sodium: </b>{sodium_mg_total}mg </li>
                    <li><b>Potassium: </b>{potassium_mg_total}mg</li>
                    <li><b>Saturated Fat: </b>{fat_saturated_g_total}g</li>
                    <li><b>Total Fat: </b>{fat_total_g_total}g</li>
                    <li><b>Calories: </b>{calories_total} Cal</li>
                    <li><b>Cholesterol: </b>{cholesterol_mg_total}mg</li>
                    <li><b>Protein: </b>{protein_g_total}g</li>
                    <li><b>Total Carbohydrates: </b>{carbohydrates_total_g_total}g</li>
                </ul>
            </div>
    );
};
export default Nutrition;