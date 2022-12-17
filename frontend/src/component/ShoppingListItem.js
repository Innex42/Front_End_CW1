import React from "react";
import Stack from "react-bootstrap/esm/Stack";
import Card from "react-bootstrap/Card";

const ShoppingListItem = () => {
    const handleClick = event => {
        if (event.target.style.textDecoration) {
            event.target.style.removeProperty('text-decoration');
        } else {
            event.target.style.setProperty('text-decoration', 'line-through');
        }
    }
    return (
        <div style={{justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
        }}>
            <Card style={{ width: 50 + '%' }} >
            <Card.Header>
                <Card.Title>Fish and Chips</Card.Title>
            </Card.Header>
            <Card.Body>
            <Stack direction="horizontal" gap={3}>
                <div><li onClick={handleClick}>Butter</li></div>
            </Stack>
            </Card.Body>
            </Card>
        </div>
    )
}
export default ShoppingListItem;