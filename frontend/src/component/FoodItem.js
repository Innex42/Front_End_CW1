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
                                Tab 3 content
                            </Tab>
                            <Tab eventKey={4} title="Nutrition">
                                <div><h3>Total Nutrition</h3></div>
                                <ul>
                                    <li><b>Sugar: </b>13g</li>
                                    <li><b>Fiber: </b>235g</li>
                                    <li><b>Serving Size: </b>g</li>
                                    <li><b>Sodium: </b>mg</li>
                                    <li><b>Potassium:</b>mg</li>
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