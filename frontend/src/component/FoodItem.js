import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const FoodItem = (/*{food} */) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Accordion style={{ width: 50 + '%' }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Fish and Chips</Accordion.Header>
                    <Accordion.Body>
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Description">
                                <h3>Description</h3>
                                Tab 1 content
                            </Tab>
                            <Tab eventKey={2} title="Ingredients">
                                <h3>Ingredients List</h3>
                                Tab 2 content
                            </Tab>
                            <Tab eventKey={3} title="Instructions">
                                <h3>Instructions</h3>
                                <b>STEP 1</b><br/> Combine the flour, cornflour, baking powder and turmeric in a large bowl, season, then spoon 1 tbsp onto a plate and set aside. Gradually pour the beer and water into the bowl, stirring with a wooden spoon until you have a smooth, lump-free batter. Leave to rest for 30 mins while you prepare the chips. <br/><b>STEP 2</b><br/>Heat oven to 200C/fan 180C/gas 6. Boil a large pan of water, then add the chipped potatoes and boil for 2-3 mins until the outsides are just tender but not soft. drain well, then tip onto a large baking tray with the flour, oil and some salt. Gently toss together until all the potatoes are evenly coated and the flour is no longer dusty. Roast for 30 mins, turning occasionally, until the chips are golden and crisp.<br/><b>STEP 3</b><br/> To cook the fish, heat the 1 litre oil in a deep saucepan until a drop of batter sizzles and crisps up straight away. Pat the fish dry with kitchen paper, then toss it in the reserved turmeric flour mix. Shake off any excess, then dip into the batter. Carefully lower each fillet into the hot oil and fry for 6-8 mins – depending on the thickness of the fish – until golden and crisp. Using a large slotted spoon, lift out the fish, drain on kitchen paper, then sprinkle with salt. Serve with the hot chips and Homemade tomato sauce (see 'goes well with').
                            </Tab>
                            <Tab eventKey={4} title="Nutrition">
                                <div><h3>Total Nutrition</h3></div>
                                <ul>
                                    <li><b>Sugar: </b>13g</li>
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
                                Tab 5 content
                            </Tab>
                        </Tabs>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};
export default FoodItem;