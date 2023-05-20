import React, { useState, setState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import parse from "html-react-parser";
import Card from "react-bootstrap/Card";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { BsSuitHeart } from 'react-icons/bs';
import { BsCheckSquare } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";
import FetchData from "./FetchNutrition";

const FoodItem = ({ recipes, index }) => {
    
    const [selectedItems,setSelectedItems] = useState([])
    
    const handleClick = (e,selectedItem) => {
        let newState = [...selectedItem, selectedItems];
        setSelectedItems(newState);
        console.log(selectedItem);
    }

    let ingredientsForNutrition;

    for (let i =0; i <recipes.ingredientsInRecipe.length; i++){
        if (i===0 && recipes.ingredientsInRecipe[i].getNutrition===true){
            ingredientsForNutrition=(recipes.ingredientsInRecipe[i].measurementSize.toString()) + (recipes.ingredientsInRecipe[i].measurementUnit.toString() )+ " " + (recipes.ingredientsInRecipe[i].ingredientName.toString()) + " + ";

        }else if (recipes.ingredientsInRecipe[i].getNutrition===true) {
        ingredientsForNutrition=(ingredientsForNutrition) + (recipes.ingredientsInRecipe[i].measurementSize.toString()) + (recipes.ingredientsInRecipe[i].measurementUnit.toString()) + " " + (recipes.ingredientsInRecipe[i].ingredientName.toString()) + " + ";
        ingredientsForNutrition=ingredientsForNutrition.toString();
        
    }
    };
    
    let testNutrition =(recipes.ingredientsInRecipe[0].measurementSize.toString()) + (recipes.ingredientsInRecipe[0].measurementUnit.toString()) + " " + (recipes.ingredientsInRecipe[0].ingredientName.toString()) + "+" +(recipes.ingredientsInRecipe[1].measurementSize.toString()) +  (recipes.ingredientsInRecipe[1].measurementUnit.toString()) + " " + (recipes.ingredientsInRecipe[1].ingredientName.toString())


    let instructions = recipes.instructions;
    
    return (
        <div className=" mb-3" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Card style={{ width: 50 + '%',backgroundColor:"whitesmoke" }}>
                <Card.Body>
                    <Stack direction="vertical" gap={3}>
                        <Card.Title>{recipes.name}</Card.Title>
                         <Stack direction="horizontal" gap={3}>
                         <div><b>Number of Servings:</b> {recipes.numOfServings} </div>
                            <div className="d-flex ms-auto"> <Button variant="success"onClick={() => handleClick(recipes)}>Add to Menu</Button> </div>
                            <div><BsSuitHeart/></div>
                            </Stack> 
                            <br/>
                    </Stack>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="accordion-header">
                                <b>More Information</b>
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
                                    <Tab eventKey={4} title="Nutrition"  >
                                        <Stack direction="horizontal" gap={10} >
                                        <div><h3>Total Nutrition</h3></div>
                                        </Stack>
                                        
                                        {/*<FetchData query={ingredientsForNutrition}/>*/}

                                    </Tab>
                                    <Tab eventKey={5} title="Dietary Info">
                                        <h3>Dietary Information</h3>
                                        {recipes.glutenFree ? (<div><b>Gluten Free: </b><BsCheckSquare color="green" /></div>) : (<div><b>Gluten Free: </b><BsXSquare color="red" /></div>)}
                                        {recipes.vegetarian ? (<div><b>Vegetarian: </b><BsCheckSquare color="green" /></div>) : (<div><b>Vegetarian: </b><BsXSquare color="red" /></div>)}

                                    </Tab>
                                </Tabs>
                            </Accordion.Body>
                            </Accordion.Item >
                            </Accordion >
                        </Card.Body>
                    </Card>
                    <br/>
                    <br/>
                </div>
                );
};
export default FoodItem;