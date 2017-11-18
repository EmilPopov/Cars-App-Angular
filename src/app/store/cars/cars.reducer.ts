import { initialState } from "./cars.state";
import { ADD_CAR, LIST_CARS, CAR_DETAILS } from "./cars.actions";


function addCar(state, action) {
    const result = action.result;
    return Object.assign({}, state, {
        carAdded: result.success,
        carAddedId: result.success ? result.car.id : null
    })
}


function listCars(state, action) {
    const result = action.result;
    return Object.assign({}, state, {
        allCars: result
    })
}

function carDetails(state, action) {
    const result = action.result;
    return Object.assign({}, state, {
        carDetails: result
    })
}

export function CarsReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_CAR:
            return addCar(state, action);
        case LIST_CARS:
            return listCars(state, action);
        case CAR_DETAILS:
            return carDetails(state, action);

        default:
            return state;

    }

}

