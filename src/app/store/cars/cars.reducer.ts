import { initialState } from "./cars.state";
import { ADD_CAR } from "./cars.actions";


function addCar(state, action) {

    const result = action.result;

    return Object.assign({}, state, {
        carAdded: result.success,
        carAddedId: result.success ? result.car.id : null
    })
}

export function CarsReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_CAR:
            return addCar(state, action);

        default:
            return state;

    }

}

