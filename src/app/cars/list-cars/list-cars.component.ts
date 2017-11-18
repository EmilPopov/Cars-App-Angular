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

  page: number = 1;
  cars: CarModel[];
  searchText: string;

  constructor(
    private carsActions: CarsActions,
    private router: Router,
    private route: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.page = +params['page'] || 1
        this.searchText = params['search'] || ''

        this.listCars(this.page, this.searchText);
      })
  }

  listCars(page, searchText) {
    this.carsActions.listCars(page, searchText);

    this.ngRedux
      .select(state => state.cars)
      .subscribe(cars => {
        this.cars = cars.allCars;
      });
  }

  prevPage() {
    if (this.page === 1) {
      return;
    }

    const url = this.getUrl(this.page - 1)
    this.router.navigateByUrl(url);
  }

  nextPage() {
    if (this.cars.length === 0 || this.cars.length < 10) {
      return;
    }
    const url = this.getUrl(this.page + 1)
    this.router.navigateByUrl(url);
  }

  search() {
    this.router.navigateByUrl(`cars?search=${this.searchText}`)
  }

  private getUrl(page) {
    let url = `cars?page=${page}`
    if (this.searchText) {
      url += `&search=${this.searchText}`
    }

    return url;
  }

}























