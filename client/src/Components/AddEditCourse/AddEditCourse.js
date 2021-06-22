import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { updateCourse, postCourse } from "../../Redux/actions/course";
import { Link } from "react-router-dom";
const AddEditCourse = ({ history }) => {
    // state
    const [course, setCourse] = useState({
        title: "",
        description: "",
        videoUrl: "",
        pdfUrl: "",
    });
    const currentCourse = useSelector(
        (state) => state.courseReducer.currentCourse
    );
    const edit = useSelector((state) => state.courseReducer.edit);

    const dispatch = useDispatch();
    useEffect(() => {
        edit
            ? setCourse(currentCourse)
            : setCourse({
                  title: "",
                  description: "",
                  videoUrl: "",
                  pdfUrl: "",
              });
    }, [edit, currentCourse]);

    const handleChange = (e) => {
        e.preventDefault();
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    // const handleCourse = () => {
    //     if (!edit) {
    //         dispatch(postCourse(currentCourse));
    //     } else {
    //         dispatch(updateCourse(currentCourse._id, currentCourse));
    //     }
    // };

    return (
        <div>
            <center>
                <br />
                <br />
                <br />
                <h1> Adding course</h1>
                <br />
                <br />
                <br />
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{course.title}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter course title"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>{course.description}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Course description"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>{course.videoUrl}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Video url"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>{course.pdfUrl}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="PDF url"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Link>
                        {edit ? (
                            <Button
                                onClick={() => {
                                    dispatch(
                                        updateCourse(
                                            currentCourse._id,
                                            currentCourse
                                        )
                                    );
                                    history.push("/courses");
                                }}
                            >
                                Edit Course
                            </Button>
                        ) : (
                            <Button
                                onClick={() => {
                                    dispatch(postCourse(course));
                                    history.push("/courses");
                                }}
                            >
                                Add Course
                            </Button>
                        )}{" "}
                    </Link>
                    {/* <Link to="/instructorprofile">
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleCourse}
                        >
                            {edit ? "Edit" : "Save"}
                        </Button>
                        </Link> */}
                </Form>
            </center>
        </div>
    );
};

export default AddEditCourse;
