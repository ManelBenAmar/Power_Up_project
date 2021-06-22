import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const MessageCard = ({ message }) => {
    return (
        <div>
            <Card
                style={{
                    width: "18rem",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                <Card.Img
                    variant="top"
                    src="https://www.freeiconspng.com/uploads/message-icon-png-11.png"
                />
                <Card.Body>
                    <Card.Title>
                        <h2>{message.subject}</h2>
                    </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <h4>{message.message}</h4>
                    </ListGroupItem>
                    <ListGroupItem>{message.name}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default MessageCard;
