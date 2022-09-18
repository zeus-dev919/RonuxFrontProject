import React from "react";
import { IS_LOGIN, IS_LOGOUT } from "../actions/actionType";

const initialState = {
    success: false,
    user: {},
}

const userReducers = (state = initialState, action: any) => {

    switch (action.type) {
        case IS_LOGIN:
            return {
                ...state,
                user: action.payload,
                success: true
            };
        case IS_LOGOUT:
            return {
                ...state,
                success: false
            };
        default:
            return state;
    }
}

export default userReducers;