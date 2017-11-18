import { initialState } from "./cars.state";
import { ADD_CAR, LIST_CARS, CAR_DETAILS, LIKE_CAR, SEND_REVIEW } from "./cars.actions";


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

function likeCar(state, action) {
    if (action.result.success) {
        const currentCarLikes = state.carDetails.likes;
        const carDetails = Object.assign({}, state.carDetails, {
            likes: currentCarLikes + 1
        })

        return Object.assign({}, state, {
            carDetails
        })
    }

    return state;
}

function sendReview(state, action) {
    const result = action.result;
    
    if (result.success) {
        const carReviews = state.carReviews
        const review = result.review
        return Object.assign({}, state, {
            carReviews: [...carReviews, review]
        }) 
    }

    return state;
}


export function CarsReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_CAR:
            return addCar(state, action);
        case LIST_CARS:
            return listCars(state, action);
        case CAR_DETAILS:
            return carDetails(state, action);
        case SEND_REVIEW:
            return sendReview(state, action);

        default:
            return state;

    }

}

