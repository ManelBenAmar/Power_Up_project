import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import { toggleFalse } from "../../Redux/actions/edit";
import { getInstructorCourses } from "../../Redux/actions/course";

const InstructorProfile = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courseReducer.courses);
    const user = useSelector((state) => state.userReducer.user);
    return (
        <div>
            <br />
            <br />
            <br />
            <ProfileCard />
            <br />
            <center>
                <Link to="/instructorcourseslist">
                    <Button
                        variant="success"
                        onClick={() => dispatch(getInstructorCourses(user._id))}
                    >
                        My Courses
                    </Button>
                </Link>
                <Link to="/addcourse">
                    <Button
                        variant="warning"
                        onClick={() => dispatch(toggleFalse())}
                    >
                        Add course
                    </Button>
                </Link>
            </center>
        </div>
    );
};
export default InstructorProfile;
