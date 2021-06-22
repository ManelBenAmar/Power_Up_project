import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import { useDispatch } from "react-redux";
import { getUsers } from "../../Redux/actions/admin";
const AdminProfile = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <br /> <br /> <br /> <br />
            <ProfileCard /> <br /> <br />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                <Link to={"/userslist"}>
                    <Button>Users List</Button>
                </Link>
                <Link to={"/courses"}>
                    <Button>Courses List</Button>
                </Link>
                <Link to={"/messages"}>
                    <Button>messages</Button>
                </Link>
            </div>
        </div>
    );
};

export default AdminProfile;
