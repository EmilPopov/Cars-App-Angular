import { initialState } from "./cars.state";
import { ADD_CAR, 
    LIST_CARS, 
    CAR_DETAILS, CAR_DELETE, LIKE_CAR, SEND_REVIEW, GET_REVIEWS, USER_CARS } from "./cars.actions";


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

function getReviews(state, action) {
    const result = action.result;

    return Object.assign({}, state, {
        allReviews: result
    })

}

function getUserCars(state, action){
    const result = action.result;
    return Object.assign({}, state, {
        userCars: result
    })

}

function deleteCar(state, action){
    const result = action.result;
    
    if (result.success) {
        const id = action.id
        const carIndex = state.userCars.findIndex(c => c.id === id);
     
        if (carIndex >= 0) {
            const userCars = state.userCars.slice(0)
            userCars.splice(carIndex, 1);
            return Object.assign({}, state, {
                userCars
            })
        }
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
        case GET_REVIEWS:
            return getReviews(state, action);
        case USER_CARS:
            return getUserCars(state, action);
        case CAR_DELETE:
            return deleteCar(state, action);    

        default:
            return state;

    }

}

