import { IS_LOGIN } from "../actions/actionType";

const initialState = {
    success: false
}

const userReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case IS_LOGIN:
            return {
                ...state,
                success: true
            };
        default:
            return state;
    }
}

export default userReducers;