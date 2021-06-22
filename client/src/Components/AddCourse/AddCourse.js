import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Modal, Button, Col, Card } from "react-bootstrap";
import { postCourse, getCourses } from "../../Redux/actions/course";

const AddCourse = ({ history }) => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courseReducer.courses);
    const [course, setCourse] = useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleCourse = (e) => {
        e.preventDefault();
        dispatch(postCourse(course, history));
        handleClose();
    };

    useEffect(() => {
        dispatch(getCourses());
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} style={{ paddingTop: "80px" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <h4>Courses</h4>
                            <Button variant="secondary" onClick={handleShow}>
                                Add new course
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            style={{
                                marginLeft: "200px",
                                marginRight: "200px",
                            }}
                        >
                            {courses &&
                                courses.map((el) => (
                                    <Card style={{ marginTop: "20px" }}>
                                        <Card.Header>{el.level}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{el.titre}</Card.Title>
                                            <Card.Text>
                                                {el.description}
                                            </Card.Text>
                                            <Button variant="secondary">
                                                Edit
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                ))}
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        label="Title"
                        name="titre"
                        type="text"
                        className="form-control shadow-none"
                        placeholder={`set the course title`}
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        label="Theme"
                        name="theme"
                        type="text"
                        className="form-control shadow-none"
                        placeholder={`set the course theme`}
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        label="Course Link"
                        name="url"
                        type="text"
                        className="form-control shadow-none"
                        placeholder={`set the course url`}
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        label="image"
                        name="image"
                        type="text"
                        className="form-control shadow-none"
                        placeholder={`set the image link`}
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        label="description"
                        name="description"
                        type="text"
                        className="form-control shadow-none"
                        placeholder={`set the course description`}
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Body>
                    <select
                        className="form-control"
                        name="level"
                        onchange={handleChange}
                    >
                        <option>Select Level</option>
                        <option>première année</option>
                        <option>deuxième année</option>
                        <option>troisième année</option>
                        <option>quatrième année</option>
                        <option>cinquième année</option>
                        <option>sixième année</option>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCourse}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddCourse;
