import { combineReducers } from "redux";
import userReducer from "./user";
import { courseReducer, addCourseReducer } from "./course";
import messageReducer from "./message";
import adminReducer from "./admin";
import editReducer from "./edit";
const rootReducer = combineReducers({
    userReducer,
    courseReducer,
    adminReducer,
    editReducer,
    addCourseReducer,
    messageReducer,
});
export default rootReducer;
