import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

const StudentRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token");
    const user = useSelector((state) => state.userReducer.user);

    if (token && user && user.role === "student") {
        return <Route component={Component} {...rest} />;
    }
    return <Redirect to="/studentprofile" />;
};

export default StudentRoute;
