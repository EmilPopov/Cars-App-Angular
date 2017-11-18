import { Injectable } from "@angular/core";
import { NgRedux } from "ng2-redux";
import { IAppState } from '..'

import { CarsService } from "../../cars/cars.service";


export const ADD_CAR = 'cars/ADD_CAR';
export const LIST_CARS = 'cars/LIST_CARS';
export const CAR_DETAILS = 'cars/CAR_DETAILS';
export const LIKE_CAR = 'cars/LIKE_CAR';
export const SEND_REVIEW = 'cars/SEND_REVIEW';
export const GET_REVIEWS = 'cars/GET_REVIEWS';

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

    carDetails(id) {
        this.carsService
            .details(id)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: CAR_DETAILS,
                    result
                })
            })
    }

    likeCar(id){
        this.carsService
        .like(id)
        .subscribe(result => {
            this.ngRedux.dispatch({
                type:LIKE_CAR,
                result
            })
        })
    }

    sendReview(id, review){
        this.carsService
        .addReview(id, review)
        .subscribe(result => {
            this.ngRedux.dispatch({
                type:SEND_REVIEW,
                result
            })
        })
    }

    getReviews(id){
        this.carsService
        .getReviews(id)
        .subscribe(result => {
            this.ngRedux.dispatch({
                type:GET_REVIEWS,
                result
            })
        })
    }


}
