import { CarModel } from "../../cars/car.model";

export interface ICarsState {
    carAdded: boolean;
    carAddedId: Number;
    allCars: CarModel[];
}

export const initialState: ICarsState = {
    carAdded: false,
    carAddedId: null,
    allCars: []
}
