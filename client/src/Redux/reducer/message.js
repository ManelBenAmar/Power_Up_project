import { SEND_MESSAGE, SEE_MESSAGE } from "../constants/message";

const initialState = {
    user: {},
    messages: [],
};
export const messageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: payload,
            };
        case SEE_MESSAGE:
            return {
                ...state,
                messages: payload,
            };

        default:
            return state;
    }
};

export default messageReducer;
