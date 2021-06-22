import axios from "axios";
import { SEND_MESSAGE, SEE_MESSAGE } from "../constants/message";

export const seeAllMessages = () => async (dispatch) => {
    try {
        const messages = await axios.get("/api/message/");
        dispatch({
            type: SEE_MESSAGE,
            payload: messages.data,
        });
    } catch (error) {
        console.error(error);
    }
};
export const addMessage = (newMessage) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };
    try {
        const addMess = await axios.post(
            "/api/message/add",
            newMessage,
            config
        );
        dispatch({
            type: SEND_MESSAGE,
            payload: addMess.data,
        });
    } catch (error) {
        console.error(error);
    }
};
