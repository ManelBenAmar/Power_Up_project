import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { logout } from "../../Redux/actions/user";
const Navbarp = ({ getSearchTitle }) => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand
                    href="/"
                    style={{
                        width: "8cm",
                        display: "flex",
                        justifyContent: "space-around",
                    }}
                >
                    POWER UP
                </Navbar.Brand>
                <Nav className="mr-auto" style={{ width: "25cm" }}>
                    <Nav.Link href="/" style={{ width: "4cm" }}>
                        <Button> Home</Button>
                    </Nav.Link>
                    <Nav.Link href="/courses" style={{ width: "4cm" }}>
                        <Button>Courses</Button>
                    </Nav.Link>

                    {/* <Form className="d-flex" style={{ width: "20cm" }}>
                        <Button>
                            <FormControl
                                type="search"
                                placeholder="Search a course"
                                className="mr-2"
                                aria-label="Search"
                                onChange={(e) => getSearchTitle(e.target.value)}
                            />
                        </Button>
                    </Form> */}
                    {isAuth ? (
                        <Nav.Link href="/Contactus" style={{ width: "4cm" }}>
                            <Button>Contact Us</Button>
                        </Nav.Link>
                    ) : null}
                </Nav>

                <Nav className="mr-auto" style={{ width: "10cm" }}>
                    {isAuth ? (
                        <Nav>
                            <Nav.Link
                                href="/logout"
                                onClick={() => dispatch(logout())}
                            >
                                <Button>Log Out</Button>
                            </Nav.Link>

                            {user.role === "admin" ? (
                                <Nav.Link href="/adminprofile">
                                    <Button>My profile</Button>
                                </Nav.Link>
                            ) : user.role === "instructor" ? (
                                <Nav.Link href="/instructorprofile">
                                    <Button>My profile</Button>
                                </Nav.Link>
                            ) : (
                                <Nav.Link href="/studentprofile">
                                    <Button>My profile</Button>
                                </Nav.Link>
                            )}
                        </Nav>
                    ) : (
                        <Nav>
                            <Nav.Link href="/login" style={{ width: "3cm" }}>
                                <Button>Log in</Button>
                            </Nav.Link>
                            <Nav.Link href="/register" style={{ width: "3cm" }}>
                                <Button>Register</Button>
                            </Nav.Link>
                        </Nav>
                    )}
                </Nav>
            </Navbar>
        </div>
    );
};
export default Navbarp;
