import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInstructorCourses } from "../../Redux/actions/course";

import CoursCardInstructor from "../CoursCard//CoursCardInstructor";
import { Form, FormControl, Button } from "react-bootstrap";
const CoursesListInstructor = ({ searchTitle, getSearchTitle }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    const courses = useSelector((state) => state.courseReducer.courses);
    useEffect(() => {
        dispatch(getInstructorCourses());
    }, []);
    return (
        <div>
            <center>
                <br />
                <br />
                <br />
                <div>
                    <Form style={{ width: "25cm" }}>
                        <Button>
                            <FormControl
                                type="search"
                                placeholder="Search a course"
                                aria-label="Search"
                                onChange={(e) => getSearchTitle(e.target.value)}
                            />
                        </Button>
                    </Form>{" "}
                </div>
                <br />
                <br />
                <br />
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}
                >
                    {courses &&
                        courses
                            .filter(
                                (val) =>
                                    val.title &&
                                    val.title
                                        .toLowerCase()
                                        .includes(
                                            searchTitle &&
                                                searchTitle.toLowerCase()
                                        )
                            )
                            .map((course) => (
                                <CoursCardInstructor
                                    course={course}
                                    key={course._id}
                                />
                            ))}
                    {/* {courses &&
                    courses.map((el) => (
                        <CoursCardInstructor key={el._id} course={el} />
                    ))}
                ; */}
                </div>
            </center>
        </div>
    );
};

export default CoursesListInstructor;
