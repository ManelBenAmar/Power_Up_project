import axios from "axios";
import {
    LOAD_USER,
    REGISTER_USER,
    FAIL_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
    GET_USER_ID,
    GET_INSTRUCTOR_ID,
    ENROLL_STUDENT_COURSES_SUCCESS,
    ENROLL_STUDENT_COURSES_FAIL,
} from "../constants/user";

export const register = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/register", user);
        //succees action
        dispatch({ type: REGISTER_USER, payload: result.data }); //{user,token,msg}

        if (user.role === "student") {
            history.push("/studentprofile");
        } else history.push("/instructorprofile");

        /*   history.push("/profile");
        history.push("/profile");
        if (user.role === "student") {
            history.push("/studentprofile");
        } else history.push("/instructorprofile");
    */
    } catch (error) {
        // fail
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/login", user);
        console.log(result.data);
        dispatch({ type: LOGIN_USER, payload: result.data }); //{msg,token,user}
        console.log(user);
        // if (result.data.user.role === "student") {
        //     history.push("/studentprofile");
        // } else history.push("/instructorprofile");
        if (result.data.user.role === "student") {
            history.push("/studentprofile");
        } else if (result.data.user.role === "admin") {
            history.push("/adminprofile");
        } else if (result.data.user.role === "instructor") {
            history.push("/instructorprofile");
        } else history.push("/login");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/user/current", config);
        dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
    } catch (error) {
        // dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

// logout
export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};

export const videErrors = () => {
    return {
        type: "VIDE_ERRORS",
    };
};
// get user by id
export const getUserById = () => async (dispatch) => {
    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    try {
        const res = await axios.get(`/api/user/oneStudent`, config);
        dispatch({ type: GET_USER_ID, payload: res.data });
    } catch (error) {
        console.log(error);
    }
};

// get one student enrolled courses
export const enrollCourse = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.put(
            `/api/user/updateCourse/${id}`,
            {},
            config
        );
        dispatch(getUserById());
    } catch (error) {
        dispatch({
            type: ENROLL_STUDENT_COURSES_FAIL,
            payload: error.response.data,
        });
    }
};

// // get user by id
// export const getInstructorById = () => async (dispatch) => {
//     const config = {
//         headers: {
//             authorization: localStorage.getItem("token"),
//         },
//     };
//     try {
//         const res = await axios.get(`/api/user/oneInstructor`, config);
//         dispatch({ type: GET_INSTRUCTOR_ID, payload: res.data });
//     } catch (error) {
//         console.log(error);
//     }
// };

export const getInstructorById = (id) => (dispatch) => {
    axios
        .get(`/api/users/${id}`)
        .then((res) =>
            dispatch({ type: GET_INSTRUCTOR_ID, payload: res.data.response })
        )
        .catch((err) => console.log(err));
};
