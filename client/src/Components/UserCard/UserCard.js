import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteUser } from "../../Redux/actions/admin";
const UserCard = ({ user }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Title>{user.role}</Card.Title>
                    <Card.Text>{user.email}</Card.Text>
                    <Card.Text>{user.phone}</Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => dispatch(deleteUser(user._id))}
                    >
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserCard;
