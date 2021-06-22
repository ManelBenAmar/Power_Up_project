import axios from "axios";
import {
    GET_ALL_USERS_LOAD,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    GET_ALL_COURSES_LOAD,
    GET_ALL_COURSES_SUCCESS,
    GET_ALL_COURSES_FAIL,
} from "../constants/admin";
// get users
export const getUsers = () => async (dispatch) => {
    dispatch({ type: GET_ALL_USERS_LOAD });
    try {
        let result = await axios.get("/api/user/userslist/");
        //succees action
        dispatch({
            type: GET_ALL_USERS_SUCCESS,
            payload: result.data.users,
        });
    } catch (error) {
        // fail
        dispatch({
            type: GET_ALL_USERS_FAIL,
            payload: error,
        });
    }
};

// delete user
export const deleteUser = (id) => (dispatch) => {
    axios
        .delete(`/api/user/${id}`)
        .then((res) => dispatch(getUsers()))
        .catch((err) => console.log(err));
};
// get courses
export const getCourses = () => async (dispatch) => {
    dispatch({ type: GET_ALL_COURSES_LOAD });
    try {
        let result = await axios.get("/api/courses");
        //success action
        dispatch({
            type: GET_ALL_COURSES_SUCCESS,
            payload: result.data.courses,
        });
    } catch (error) {
        // fail
        dispatch({
            type: GET_ALL_COURSES_FAIL,
            payload: error,
        });
    }
};

// delete course
export const deleteCourse = (id) => (dispatch) => {
    axios
        .delete(`/api/courses/${id}`)
        .then((res) => dispatch(getCourses()))
        .catch((err) => console.log(err));
};
