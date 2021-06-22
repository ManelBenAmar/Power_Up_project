import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
const ProfileCard = () => {
    const user = useSelector((state) => state.userReducer.user);
    console.log(user);
    return (
        <div>
            <center>
                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
                    />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{user.role}</ListGroupItem>
                        <ListGroupItem>{user.email}</ListGroupItem>
                        <ListGroupItem>{user.phone}</ListGroupItem>
                    </ListGroup>
                </Card>
            </center>
        </div>
    );
};

export default ProfileCard;
