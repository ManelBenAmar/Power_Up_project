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
    // POST_COURSE,
} from "../constants/course";

// initialstate
const initialState = {
    courses: [],
    errors: [],
    loadCourses: false,
    edit: false,
    course: {},
};

// pure function=> (state, {type,payload})=>
export const courseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COURSES_LOAD:
            return { ...state, loadCourses: true };
        case GET_ALL_COURSES_SUCCESS:
            return { ...state, courses: payload, loadCourses: false };
        case GET_ALL_COURSES_FAIL:
            return { ...state, loadCourses: false, errors: payload };
        case COURSE_DETAILS_LOAD:
            return { loadCourses: true, ...state };
        case COURSE_DETAILS_SUCCESS:
            return { loadCourses: false, course: payload, ...state };
        case COURSE_DETAILS_FAIL:
            return { loadCourses: false, error: payload, ...state };
        case TOGGLE_TRUE:
            return { ...state, edit: true };
        case TOGGLE_FALSE:
            return { ...state, edit: false };

        case GET_COURSE:
            return { ...state, course: payload };
        // case EDIT_COURSE:
        //     return { ...state, editCourse: payload };
        case GET_INSTRUCTOR_COURSES:
            return { ...state, courses: payload, loadCourses: false };
        // case POST_COURSE:
        //     return {
        //         loadCourses: false,
        //         course: payload,
        //         ...state,
        //     };

        default:
            return state;
    }
};

export const addCourseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_COURSE_LOAD:
            return { loadCourses: true, ...state };
        case ADD_COURSE_SUCCESS:
            return {
                ...state,
                loadCourses: false,
                courses: [...state.courses, payload],
            };

        case ADD_COURSE_FAIL:
            return { loadCourses: false, error: payload, ...state };

        default:
            return state;
    }
};
