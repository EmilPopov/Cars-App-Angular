import { Injectable } from "@angular/core";
import { NgRedux } from "ng2-redux";
import { IAppState } from '..'

import { CarsService } from "../../cars/cars.service";


export const ADD_CAR = 'cars/ADD_CAR';
export const LIST_CARS = 'cars/LIST_CARS';

@Injectable()
export class CarsActions {
    constructor(
        private carsService: CarsService,
        private ngRedux: NgRedux<IAppState>) { }

    addCar(car) {
        this.carsService
            .add(car)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: ADD_CAR,
                    result
                })
            })
    }

    listCars(page = 1, searchText = null) {
        this.carsService
            .allCars(page, searchText)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: LIST_CARS,
                    result
                })
            })
    }

}
