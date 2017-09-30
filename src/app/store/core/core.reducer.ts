import { initialState } from "./core.state";

export function CoreReducer(state = initialState, action) {
    const result = action.result;
    if (result) {
        let message = result.message;
        let errors = result.errors;

        if (errors) {
            const keys = Object.keys(errors);
            if (keys.length > 0) {
                const firstKey = Object.keys(errors)[0];
                message = errors[firstKey];
            }

        }

        if (message) {
            return Object.assign({}, state, {
                message: message
            });
        }
    }

    return state;

}