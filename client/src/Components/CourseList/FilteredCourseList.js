import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CourseList.css";
import CourseCard from "../CourseCard/CourseCard";
import { getCourses } from "../../Redux/actions/course";
const CourseList = (props) => {
    const dispatch = useDispatch();
    let courses = useSelector((state) => state.courseReducer.courses);
    console.log(courses);
    useEffect(() => {
        dispatch(getCourses());
    }, []);
    return (
        <div className="courses-content">
            <div
                className="courses-list"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                {props.courses
                    .filter((course) =>
                        course.title
                            .toLowerCase()
                            .includes(props.searchTitle.toLowerCase())
                    )
                    .map((element) => (
                        <CourseCard course={element} key={element._id} />
                    ))}

                {/* {courses.map((course) => (
                    <CourseCard course={course} key={course._id} />
                ))} */}
            </div>
        </div>
    );
};

export default CourseList;
