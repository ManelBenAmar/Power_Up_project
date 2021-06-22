import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/actions/user";

import "./Navbar.css";
const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    return (
        <header>
            <h2>
                <i className="icon-plane" />
                <Link to="/">Authentification</Link>
            </h2>
            <nav>
                <ul>
                    <li>Hotels</li>

                    <li>Flights</li>

                    <ul className="ul_auth">
                        {isAuth ? (
                            <ul>
                                <Link to="/">
                                    {" "}
                                    <li
                                        className="auth"
                                        onClick={() => dispatch(logout())}
                                    >
                                        LOGOUT{" "}
                                    </li>
                                </Link>
                            </ul>
                        ) : (
                            <ul>
                                {" "}
                                <Link to="/register">
                                    {" "}
                                    <li className="auth">Register </li>
                                </Link>
                                <Link to="/login">
                                    {" "}
                                    <li className="auth">LogIn </li>
                                </Link>
                            </ul>
                        )}
                    </ul>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
