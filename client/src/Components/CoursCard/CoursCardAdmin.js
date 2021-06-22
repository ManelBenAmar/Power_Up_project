import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteCourse } from "../../Redux/actions/admin";
import { courseDetails } from "../../Redux/actions/course";
const CoursCardAdmin = ({ course }) => {
    const dispatch = useDispatch();
    const showCourse = () => dispatch(courseDetails(course._id));
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/document-app-icon-or-logo-icon-design-template-7b6cac8de4b9abdd949f7643fe00924e_screen.jpg?ts=1576967977"
                />
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Title>{course.instructor}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    <Card.Link href={`/coursedetails/${course._id}`}>
                        <Button variant="primary" onClick={() => showCourse()}>
                            Show
                        </Button>
                    </Card.Link>
                    <Button
                        variant="primary"
                        onClick={() => dispatch(deleteCourse(course._id))}
                    >
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CoursCardAdmin;
