//import constants

import {
    GET_ALL_USERS_LOAD,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    GET_ALL_COURSES_LOAD,
    GET_ALL_COURSES_SUCCESS,
    GET_ALL_COURSES_FAIL,
} from "../constants/admin";

// initialstate
const initialState = {
    users: [],
    courses: [],
    errors: [],
    loadUsers: false,
    loadCourses: false,
};

// pure function=> (state, {type,payload})=>
const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_USERS_LOAD:
            return { ...state, loadUsers: true };
        case GET_ALL_USERS_SUCCESS:
            return { ...state, users: payload, loadUsers: false };
        case GET_ALL_USERS_FAIL:
            return { ...state, loadUsers: false, errors: payload };
        case GET_ALL_COURSES_LOAD:
            return { ...state, loadCourses: true };
        case GET_ALL_COURSES_SUCCESS:
            return { ...state, courses: payload, loadCourses: false };
        case GET_ALL_COURSES_FAIL:
            return { ...state, loadCourses: false, errors: payload };
        default:
            return state;
    }
};

export default adminReducer;
