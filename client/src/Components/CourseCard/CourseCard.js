import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { courseDetails } from "../../Redux/actions/course";
import { enrollCourse } from "../../Redux/actions/user";
import { deleteCourse } from "../../Redux/actions/admin";

const CourseCard = ({ course }) => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    const handleCourse = () => {
        dispatch(enrollCourse(course._id));
    };
    const showCourse = () => dispatch(courseDetails(course._id));
    return (
        <div>
            <Card
                style={{
                    width: "18rem",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                <Card.Img
                    variant="top"
                    src="http://iconutopia.com/wp-content/uploads/2016/06/icon-design-guide.png"
                />
                <Card.Body>
                    <Card.Title>
                        {/* course title */}
                        {course.title}
                    </Card.Title>
                    <Card.Title>
                        {/* course instructor */}
                        {course.instructor}
                    </Card.Title>
                    <Card.Text>
                        course description
                        {course.description}
                    </Card.Text>
                    {isAuth && user.role === "student" ? (
                        <div>
                            <Card.Link href={`/coursedetails/${course._id}`}>
                                <Button onClick={() => showCourse()}>
                                    Show{" "}
                                </Button>{" "}
                            </Card.Link>
                            <Card.Link>
                                <Button onClick={handleCourse}>Enroll </Button>
                            </Card.Link>
                        </div>
                    ) : isAuth && user.role === "admin" ? (
                        <div>
                            <Card.Link href={`/coursedetails/${course._id}`}>
                                <Button onClick={() => showCourse()}>
                                    Show{" "}
                                </Button>{" "}
                            </Card.Link>
                            <Card.Link>
                                <Button
                                    onClick={() =>
                                        dispatch(deleteCourse(course._id))
                                    }
                                >
                                    Delete{" "}
                                </Button>
                            </Card.Link>
                        </div>
                    ) : isAuth && user.role === "instructor" ? (
                        <Card.Link href={`/coursedetails/${course._id}`}>
                            <Button onClick={() => showCourse()}>Show</Button>
                        </Card.Link>
                    ) : (
                        <Card.Link href="/register">
                            <Button variant="primary">Register to show</Button>
                        </Card.Link>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;
