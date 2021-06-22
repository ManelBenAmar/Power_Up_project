import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, videErrors } from "../../Redux/actions/user";
import Errors from "../Errors/Errors";
/*import { DropdownButton, Dropdown } from "react-bootstrap";*/

import "./Registration.css";

const Registration = ({ history }) => {
    const [user, setUser] = useState({});
    const errors = useSelector((state) => state.userReducer.errors);

    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(user, history));
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        return () => {
            dispatch(videErrors());
        };
    }, []);
    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    {errors && errors.length > 0
                                        ? errors.map((el) => (
                                              <Errors error={el} />
                                          ))
                                        : null}
                                    <h3 className="login-heading mb-4">
                                        Create an account!
                                    </h3>
                                    <form onSubmit={(e) => handleRegister(e)}>
                                        <div className="form-label-group">
                                            <h5>Full name</h5>
                                            <input
                                                type="text"
                                                name="name"
                                                id="inputName"
                                                className="form-control"
                                                placeholder="User name"
                                                required
                                                autofocus
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <h5>Email address</h5>
                                        <div className="form-label-group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="inputEmail"
                                                className="form-control"
                                                placeholder="Email address"
                                                required
                                                autofocus
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <h5>Password</h5>
                                        <div className="form-label-group">
                                            <input
                                                type="password"
                                                name="password"
                                                id="inputPassword"
                                                className="form-control"
                                                placeholder="Password"
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <h5>Phone number</h5>
                                        <div className="form-label-group">
                                            <input
                                                type="number"
                                                id="inputPhone"
                                                className="form-control"
                                                placeholder="enter your phone number"
                                                name="phone"
                                                autofocus
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/*<div>
                                        <DropdownButton
                                                id="dropdown-basic-button"
                                                title="Instructor/Student"
                                            >
                                                <Dropdown.Item href="#/action-1">
                                                    Instructor
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">
                                                    Student
                                                </Dropdown.Item>
                                            </DropdownButton>
                                        </div> 
                                        <br />
                                        <br />*/}
                                        <select
                                            onChange={handleChange}
                                            name="role"
                                        >
                                            <option value="student" selected>
                                                student
                                            </option>
                                            <option value="instructor">
                                                instructor
                                            </option>
                                        </select>
                                        <br />
                                        <br />
                                        <button
                                            className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                                            type="submit"
                                            onClick={handleRegister}
                                        >
                                            Sign Up
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
