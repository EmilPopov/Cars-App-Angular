import { Injectable } from "@angular/core";
import { NgRedux } from "ng2-redux";
import { IAppState } from '..'

import { CarsService } from "../../cars/cars.service";


export const ADD_CAR = 'cars/ADD_CAR';

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

}
