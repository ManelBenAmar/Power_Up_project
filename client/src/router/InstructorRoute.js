import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

const InstructorRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token");
    const user = useSelector((state) => state.userReducer.user);

    if (token && user.role === "instructor") {
        return <Route component={Component} {...rest} />;
    }
    return <Redirect to="/instructorprofile" />;
};

export default InstructorRoute;
