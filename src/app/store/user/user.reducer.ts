import { initialState } from "./user.state";
import { USER_REGISTERED, USER_LOGGED, USER_LOGOUT } from "./user.actions";


function userRegistration(state, action) {
    const result = action.result;

    return Object.assign({}, state, {
        userRegistered: result.success
    })
}

function userLogin(state, action) {

    const result = action.result;

    return Object.assign({}, state, {
        userAuthenticated: result.success,
        token: result.token,
        username: result.user ? result.user.name : null
    })
}

function userLogout(state, action) {

    return Object.assign({}, state, {
        userAuthenticated: false,
        token: null,
        username: null
    })
}

export function UserReducer(state = initialState, action) {

    switch (action.type) {
        case USER_REGISTERED:
            return userRegistration(state, action);
        case USER_LOGGED:
            return userLogin(state, action);
        case USER_LOGOUT:
            return userLogout(state, action);


        default:
            return state;

    }

}
