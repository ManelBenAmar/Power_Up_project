import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "../../Redux/actions/user";
import CoursCardStudent from "../CoursCard/CoursCardStudent";
import { Form, FormControl, Button } from "react-bootstrap";
const CoursesListStudent = ({ searchTitle, getSearchTitle }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    const enrolledCourses = useSelector(
        (state) => state.userReducer.enrolledCourses
    );
    useEffect(() => {
        dispatch(getUserById());
    }, []);
    return (
        <div>
            <center>
                <div>
                    <br /> <br /> <br /> <br />
                    <div>
                        <Form style={{ width: "25cm" }}>
                            <Button>
                                <FormControl
                                    type="search"
                                    placeholder="Search a course"
                                    aria-label="Search"
                                    onChange={(e) =>
                                        getSearchTitle(e.target.value)
                                    }
                                />
                            </Button>
                        </Form>{" "}
                    </div>
                    <br /> <br /> <br />
                    <div
                        className="courses-list"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                        }}
                    >
                        {enrolledCourses
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
                            .map((el) => (
                                <CoursCardStudent
                                    key={el._id}
                                    enrolledCourse={el}
                                />
                            ))}
                        ;
                        {/* {enrolledCourses &&
                            enrolledCourses.map((el) => (
                                <CoursCardStudent
                                    key={el._id}
                                    enrolledCourse={el}
                                />
                            ))}
                        ; */}
                    </div>
                </div>
            </center>
        </div>
    );
};

export default CoursesListStudent;
