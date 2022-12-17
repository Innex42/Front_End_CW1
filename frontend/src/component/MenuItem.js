import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion"
import { BsPlusCircle, BsDashCircle } from "react-icons/bs"
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/esm/Button";

const MenuItem = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Card style={{ width: 50 + '%' }} >
                <Card.Body>
                    <Stack direction="horizontal" gap={3}>
                        <div><Card.Title>Fish and Chips</Card.Title></div>
                        <div className="vr" />
                        <div className="d-flex ms-auto ">
                            <Stack direction="vertical">
                                <Stack direction="horizontal" gap={2}>
                                    <div><b>Number of Servings: </b></div>
                                    <div>1</div>
                                </Stack>
                                <div className="ms-auto">
                                    <Stack direction="horizontal" gap={3}>
                                        <Button variant="danger">
                                            <BsDashCircle color="white" />
                                        </Button>

                                        <Button variant="success">
                                            <BsPlusCircle color="white" />
                                        </Button>
                                    </Stack>
                                </div>
                            </Stack>
                        </div>
                    </Stack>
                    <hr/>
                    <div>
                        <Accordion >
                            <Accordion.Item>
                                <Accordion.Header style={{ backgroundColor: 'light' }}>
                                    <b>Ingredient List</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <h3>Ingredients</h3>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Card.Body>

            </Card>
        </div>
    )
}
export default MenuItem;