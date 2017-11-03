import { Component, OnInit } from '@angular/core';
import { CarModel } from "../car.model";
import { CarsActions } from "../../store/cars/cars.actions";
import { NgReduxModule, NgRedux } from "ng2-redux";
import { IAppState } from "../../store/app-state"
import { Router } from "@angular/router";


@Component({
  selector: 'add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  // engines = [1.2, 2.0, 3.6, 4.8]
  car: CarModel;

  constructor(
    private carsActions: CarsActions,
    private router: Router,
    private ngRedux: NgRedux<IAppState>) {

  }


  ngOnInit() {
    this.resetCar()
  }

  resetCar() {
    this.car = new CarModel();
  }

  addCar() {

    this.carsActions.addCar(this.car)

    this.ngRedux
      .select(state => state.cars)
      .subscribe(cars => {

        const carId = cars.carAddedId

        if (cars.carAdded) {
          this.router.navigateByUrl(`/cars/details/${carId}`)
        }
      });
  }
}






