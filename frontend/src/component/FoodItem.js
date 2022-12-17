import React, {useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import parse from "html-react-parser";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import {BsSuitHeart} from 'react-icons/bs';
import { BsCheckSquare } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";

const FoodItem = ({recipes} ) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleClick = (e, selectedItem) => {
        let newState = [...selectedItems, selectedItem];
        setSelectedItems(newState);
        console.log(selectedItems)
    };
    let instructions = recipes.instructions;
  
    
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Accordion style={{ width: 50 + '%' }}>
                <Accordion.Item>
                    <Accordion.Header>
                        <Stack direction="vertical" gap={3}>
                            <div>{recipes.name}</div>
                            <div>Number of Servings: {recipes.numOfServings} </div>
                           {/* <Stack direction="horizontal" gap={3}>
                            <div> <Button variant="success">Add to Menu</Button> </div>
                            <div className="d-flex justify-content-end "><BsSuitHeart/></div>
                            </Stack> */}
                        </Stack> 
                    </Accordion.Header>
                    <Accordion.Body>
                        <Tabs id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Description">
                                <h3>Description</h3>
                                <p>{recipes.description}</p>
                            </Tab>
                            <Tab eventKey={2} title="Ingredients">
                                <h3>Ingredients List</h3>
                                {recipes.ingredientsInRecipe.map((ingredient, index) => {
                                    return (
                                        <p>{ingredient.measurementSize}{ingredient.measurementUnit} {ingredient.prepStyle} {ingredient.ingredientName} </p>
                                    );
                                })}
                            </Tab>
                            <Tab eventKey={3} title="Instructions">
                                <h3>Instructions</h3>
                                {parse(instructions)} 
                               
                            </Tab>
                            <Tab eventKey={4} title="Nutrition" >
                                <div><h3>Total Nutrition</h3></div>
                                <ul>
                                    <li><b>Sugar: </b>{recipes.nutrition.sugar_g}2g</li>
                                    <li><b>Fiber: </b>235g</li>
                                    <li><b>Serving Size: </b>g</li>
                                    <li><b>Sodium: </b>mg</li>
                                    <li><b>Potassium: </b>mg</li>
                                    <li><b>Saturated Fat: </b>g</li>
                                    <li><b>Total Fat: </b>g</li>
                                    <li><b>Calories: </b>31234 Cal</li>
                                    <li><b>Cholesterol: </b>mg</li>
                                    <li><b>Protein: </b>g</li>
                                    <li><b>Total Carbohydrates: </b>g</li>
                                </ul>
                                
                            </Tab>
                            <Tab eventKey={5} title="Dietary Info">
                                <h3>Dietary Information</h3>
                                {recipes.glutenFree ? (<div><b>Gluten Free: </b><BsCheckSquare color="green"/></div>): (<div><b>Gluten Free: </b><BsXSquare color="red" /></div>)}
                                {recipes.vegetarian ? (<div><b>Vegetarian: </b><BsCheckSquare color="green"/></div>): (<div><b>Vegetarian: </b><BsXSquare color="red" /></div>)}

                            </Tab>
                        </Tabs>
                        <Stack direction="horizontal" gap={3}>
                            <div> <Button variant="success" >Add to Menu</Button> </div>
                            <div className="d-flex justify-content-end "><BsSuitHeart/></div>
                            <br/>
                        </Stack> 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};
export default FoodItem;