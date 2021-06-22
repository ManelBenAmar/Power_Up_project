import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteUser } from "../../Redux/actions/admin";
const UserCardAdmin = ({ user }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
                />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Title>{user.role}</Card.Title>
                    <Card.Text>{user.email}</Card.Text>
                    <Card.Text>{user.phone}</Card.Text>
                </Card.Body>
                <footer>
                    {" "}
                    <Button
                        variant="primary"
                        onClick={() => dispatch(deleteUser(user._id))}
                    >
                        Delete
                    </Button>
                </footer>
            </Card>
        </div>
    );
};

export default UserCardAdmin;
