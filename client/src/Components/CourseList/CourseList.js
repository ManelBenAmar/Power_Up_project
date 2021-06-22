import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CourseList.css";
import CourseCard from "../CourseCard/CourseCard";
import { getCourses } from "../../Redux/actions/course";
import { Form, FormControl, Button } from "react-bootstrap";
const CourseList = ({ searchTitle, getSearchTitle }) => {
    const dispatch = useDispatch();
    let courses = useSelector((state) => state.courseReducer.courses);
    console.log(courses);
    let loadCourses = useSelector((state) => state.courseReducer.loadCourses);
    useEffect(() => {
        dispatch(getCourses());
    }, []);
    return (
        <div className="courses-content">
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
                    className="courses-list"
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
                                <CourseCard course={course} key={course._id} />
                            ))}
                    {/* ****************** */}
                    {/* {loadCourses ? (
                    <h2>loading</h2>
                ) : (
                    courses &&
                    courses.map((el) => <CourseCard key={el._id} course={el} />)
                )} */}
                    {/* ***************** */}
                    {/* {courses.map((course) => (
                    <CourseCard course={course} key={course._id} />
                ))} */}
                </div>
            </center>
        </div>
    );
};

export default CourseList;
