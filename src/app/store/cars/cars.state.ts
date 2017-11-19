import { CarModel } from "../../cars/car.model";
import { CarDetailsModel } from "../../cars/car-details.model";

export interface ICarsState {
    carAdded: boolean;
    carAddedId: Number;
    allCars: CarModel[];
    carDetails: CarDetailsModel[];
    carReviews:[{}];
    allReviews:[{}],
    userCars:[object]
}

export const initialState: ICarsState = {
    carAdded: false,
    carAddedId: null,
    allCars: [],
    carDetails: [],
    carReviews:[{}],
    allReviews:[{}],
    userCars:[{}]
}
