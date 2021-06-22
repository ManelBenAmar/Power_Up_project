import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../Redux/actions/admin";
import CoursCardAdmin from "../CoursCard/CoursCardAdmin";
import { Form, Button, FormControl } from "react-bootstrap";
const CoursesListAdmin = ({ searchTitle, getSearchTitle }) => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courseReducer.courses);
    const loadCourses = useSelector((state) => state.adminReducer.loadCourses);
    useEffect(() => {
        dispatch(getCourses());
    }, []);

    return (
        <div>
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
                            onChange={(e) =>
                                getSearchTitle && getSearchTitle(e.target.value)
                            }
                        />
                    </Button>
                </Form>{" "}
            </div>
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
                                        searchTitle && searchTitle.toLowerCase()
                                    )
                        )
                        .map((course) => (
                            <CoursCardAdmin course={course} key={course._id} />
                        ))}
            </div>
        </div>
    );
};

export default CoursesListAdmin;
