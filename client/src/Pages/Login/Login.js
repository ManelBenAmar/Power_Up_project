import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, videErrors } from "../../Redux/actions/user";
import Errors from "../Errors/Errors";
import "./Login.css";

const Login = ({ history }) => {
    const [user, setUser] = useState({});
    const errors = useSelector((state) => state.userReducer.errors);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(user, history));
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
                                    {errors.length > 0
                                        ? errors.map((el) => (
                                              <Errors error={el} />
                                          ))
                                        : null}
                                    <h3 className="login-heading mb-4">
                                        Welcome back!
                                    </h3>
                                    <form onSubmit={handleLogin}>
                                        <h5>Email adress</h5>
                                        <div className="form-label-group">
                                            <input
                                                type="email"
                                                id="inputEmail"
                                                name="email"
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

                                        <button
                                            className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                                            type="submit"
                                        >
                                            Sign in
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

export default Login;
