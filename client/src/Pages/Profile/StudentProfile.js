import React from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../Redux/actions/user";
const StudentProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);

    return (
        <div>
            <br />
            <br />
            <br />
            <ProfileCard />
            <br />
            <center>
                <Link to="/studentcourseslist">
                    <Button
                        variant="success"
                        onClick={() => dispatch(getUserById(user._id))}
                    >
                        {" "}
                        My Courses list
                    </Button>
                </Link>
            </center>
        </div>
    );
};

export default StudentProfile;
