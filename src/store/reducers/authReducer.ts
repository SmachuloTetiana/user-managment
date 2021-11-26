import { AuthState } from "../../interfaces/data";
import { ADD_USER, GET_USER, REMOVE_USER, SET_ERROR, SET_USER, SIGN_OUT, UPDATE_USER } from "../types";

export const initialState: AuthState = {
    user: null,
    users: [],
    error: ''
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SIGN_OUT:
            return {
                ...state,
                user: null
            }
        case GET_USER:
            return {
                ...state,
                users: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case UPDATE_USER:
            const updatedUsers = state.users.filter(user => user.id !== action.payload.id);

            return {
                ...state,
                users: [...updatedUsers, action.payload]
            }
        case REMOVE_USER:
            return {
                ...state,
                users: [...state.users.filter(user => user.id !== action.payload)]
            }
        default:
            return state
    }
};

export default authReducer;