import { initialState } from "./user.state";
import { USER_REGISTERED } from "./user.actions";


function userRegistration(state, action) {
    const result = action.result;

    return Object.assign({}, state, {
        userRegistered: result.success
    })

}

export function UserReducer(state = initialState, action) {

    switch (action.type) {
        case USER_REGISTERED:
            return userRegistration(state, action);


        default:
            return state;

            ;
    }

}
