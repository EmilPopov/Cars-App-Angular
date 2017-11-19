import { Component, OnInit } from '@angular/core';
import { CarsActions } from "../../store/cars/cars.actions";
import { NgRedux } from "ng2-redux/lib";
import { IAppState } from "../../store/app-state";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cars;

  constructor(
    private carsActions: CarsActions,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.carsActions.userCars()

    this.ngRedux
      .select(state => state.cars)
      .subscribe(cars => this.cars = cars.userCars)
  }

  deleteCar(id) {
    this.carsActions.delete(id);

    // this.ngRedux.select(car => )
  }
}
