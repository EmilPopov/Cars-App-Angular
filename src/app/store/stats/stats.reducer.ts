import { initialState } from "./stats.state";
import { GET_STATS } from "./stats.actions";


function getStats(state, action) {

    const stats = action.result;

    return Object.assign({}, state, {
        users: stats.users,
        cars: stats.cars
    })
}

export function StatsReducer(state = initialState, action) {

    switch (action.type) {
        case GET_STATS:
            return getStats(state, action);

        default:
            return state;

    }

}
