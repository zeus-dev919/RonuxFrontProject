import { IS_LOGIN, IS_LOGOUT } from "./actionType"

export const userLogin = () => {
    const type = IS_LOGIN;
    return type;
}
export const userLogout = () => {
    const type = IS_LOGOUT;
    return type;
}
