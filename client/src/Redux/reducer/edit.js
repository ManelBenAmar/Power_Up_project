import { TOGGLE_FALSE, TOGGLE_TRUE } from "../constants/edit";

const initialState = {
    edit: true,
};
export const editReducer = (state = initialState, { type }) => {
    switch (type) {
        case TOGGLE_TRUE:
            return { ...state, edit: true };

        case TOGGLE_FALSE:
            return { ...state, edit: false };

        default:
            return state;
    }
};

export default editReducer;
