import axios from "axios";
import {
    GET_ALL_COURSES_LOAD,
    GET_ALL_COURSES_SUCCESS,
    GET_ALL_COURSES_FAIL,
    GET_COURSE,
    EDIT_COURSE,
    GET_INSTRUCTOR_COURSES,
    COURSE_DETAILS_LOAD,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    ADD_COURSE_FAIL,
    ADD_COURSE_SUCCESS,
    ADD_COURSE_LOAD,
    TOGGLE_FALSE,
    TOGGLE_TRUE,
} from "../constants/course";
// get courses
export const getCourses = () => async (dispatch) => {
    dispatch({ type: GET_ALL_COURSES_LOAD });
    try {
        let result = await axios.get("/api/courses");
        //succees action
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

// get course by id
export const getCourse = (id) => (dispatch) => {
    axios
        .get(`/api/courses/${id}`)
        .then((res) =>
            dispatch({ type: GET_COURSE, payload: res.data.response })
        )
        .catch((err) => console.log(err));
};

// post course (add course)
export const postCourse = (newCourse) => async (dispatch) => {
    try {
        await axios.post("/api/courses/add/", newCourse);
        dispatch(getCourses());
    } catch (error) {
        console.log(error);
    }
};

// export const postCourse = (currentCourse, history) => async (dispatch) => {
//     dispatch({ type: ADD_COURSE_LOAD });
//     const config = {
//         headers: {
//             authorization: localStorage.getItem("token"),
//         },
//     };
//     try {
//         const result = await axios.post("/api/courses/add", currentCourse);
//         dispatch({ type: ADD_COURSE_SUCCESS, payload: result.data, config });
//     } catch (error) {
//         dispatch({ type: ADD_COURSE_FAIL, payload: error.data });
//     }
// };

// export const postCourse = (currentCourse) => async (dispatch) => {

//     try {
//         const result = await axios.post("/api/courses/add", currentCourse);
//         dispatch(getCourses());
//     } catch (error) {
//         console.log(error.response);
//     }
// };
//edit course
export const updateCourse = (id, newCourse) => async (dispatch) => {
    try {
        await axios.put(`/api/courses/${id}`, newCourse);
        dispatch(getCourses());
    } catch (error) {
        console.log(error);
    }
};

// export const updateCourse = (id, currentCourse) => async (dispatch) => {
//     try {
//         await axios.put(`/api/courses/${id}`, currentCourse);
//         dispatch(getCourses());
//     } catch (error) {
//         console.log(error);
//     }
// };
// // get one instructor courses
// export const getInstructorCourses = (id) => (dispatch) => {
//     try {
//         let result = axios.get(`api/courses/getinstructorcourses/${id}`);
//         //succees action
//         dispatch({
//             type: GET_INSTRUCTOR_COURSES,
//             payload: result.data.courses,
//         });
//     } catch (error) {
//         // fail
//         dispatch({
//             type: GET_INSTRUCTOR_COURSES_FAIL,
//             payload: error,
//         });
//     }

// axios
//     .get(`api/courses/getinstructorcourses/${id}`)
//     .then((res) =>
//         dispatch({
//             type: GET_INSTRUCTOR_COURSES,
//             payload: res.data.courses,
//         })
//     )
//     .catch((err) => console.log(err));
// };

// get courses details

export const courseDetails = (id) => async (dispatch) => {
    dispatch({ type: COURSE_DETAILS_LOAD });

    try {
        const { data } = await axios.get(`/api/courses/${id}`);

        await dispatch({
            type: COURSE_DETAILS_SUCCESS,
            payload: data,
        });
        console.log(data);
    } catch (error) {
        dispatch({
            type: COURSE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        });
    }
};

// get instructor courses
export const getInstructorCourses = (id) => (dispatch) => {
    axios
        .get(`/api/courses/getInstructorCourses/${id}`)
        .then((res) =>
            dispatch({
                type: GET_INSTRUCTOR_COURSES,
                payload: res.data,
            })
        )
        .catch((err) => console.log(err));
};
