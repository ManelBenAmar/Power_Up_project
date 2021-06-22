import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { courseDetails } from "../../Redux/actions/course";
import { Card, Button } from "react-bootstrap";

const CoursCardStudent = ({ enrolledCourse }) => {
    const course = useSelector((state) => state.courseReducer.course);
    const dispatch = useDispatch();
    const showCourse = () => dispatch(courseDetails(course && course._id));
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCKD9Mqs_MzkL9ZP_vdpp9_7S7fDplcD8cldITCVDUBSZx3geTC2FZ1vB9Eih7WUxwJE&usqp=CAU"
                />
                <Card.Body>
                    <Card.Title>{enrolledCourse.title}</Card.Title>
                    <Card.Title>{enrolledCourse.instructor}</Card.Title>
                    <Card.Text>{enrolledCourse.description}</Card.Text>
                </Card.Body>
                <footer>
                    <Card.Link href={`/coursedetails/${enrolledCourse._id}`}>
                        <Button variant="primary" onClick={() => showCourse()}>
                            Show
                        </Button>
                    </Card.Link>
                </footer>
            </Card>
        </div>
    );
};

export default CoursCardStudent;
