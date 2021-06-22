import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { toggleTrue } from "../../Redux/actions/edit";
import { courseDetails, getCourse } from "../../Redux/actions/course";
import { deleteCourse } from "../../Redux/actions/course";

const CoursCardInstructor = ({ course }) => {
    const courses = useSelector((state) => state.courseReducer.courses);
    const dispatch = useDispatch();
    const showCourse = () => dispatch(courseDetails(course && course._id));
    return (
        <div>
            <br />
            <br />
            <center>
                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCKD9Mqs_MzkL9ZP_vdpp9_7S7fDplcD8cldITCVDUBSZx3geTC2FZ1vB9Eih7WUxwJE&usqp=CAU"
                    />
                    <Card.Body>
                        <Card.Title>{course.title}</Card.Title>
                        <Card.Text>{course.description}</Card.Text>
                    </Card.Body>
                    <footer>
                        <Card.Link href={`/coursedetails/${course._id}`}>
                            <Button
                                variant="primary"
                                onClick={() => showCourse()}
                            >
                                Show
                            </Button>
                        </Card.Link>
                        <Card.Link href={`/editcourse/${course._id}`}>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    dispatch(toggleTrue());
                                    dispatch(getCourse(course._id));
                                }}
                            >
                                Edit
                            </Button>
                        </Card.Link>
                        <br />
                        <Card.Link>
                            <Button
                                variant="primary"
                                onClick={() =>
                                    dispatch(deleteCourse(course._id))
                                }
                            >
                                Delete
                            </Button>
                        </Card.Link>
                    </footer>
                </Card>
            </center>
        </div>
    );
};

export default CoursCardInstructor;
