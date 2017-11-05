import { Component, OnInit } from '@angular/core';
import { CarModel } from "../car.model";
import { CarsActions } from "../../store/cars/cars.actions";
import { NgReduxModule, NgRedux } from "ng2-redux";
import { IAppState } from "../../store/app-state"
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  page = 1;
  cars: CarModel[];

  constructor(
    private carsActions: CarsActions,
    private router: Router,
    private route: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        this.page = +params['page'] || 1
        this.listCars(this.page)

        console.log(this.page);
      })
  }

  listCars(page) {
    this.carsActions.listCars(page);

    this.ngRedux
      .select(state => state.cars)
      .subscribe(cars => {
        this.cars = cars.allCars;

        console.log(this.cars);
      });
  }

  prevPage() {
    if (this.page === 1) {
      return;
    }

    this.router.navigateByUrl(`cars?page=${this.page - 1}`);
  }

  nextPage() {
    if (this.cars.length === 0 || this.cars.length < 10) {
      return;
    }

    this.router.navigateByUrl(`cars?page=${this.page + 1}`);

  }

}























