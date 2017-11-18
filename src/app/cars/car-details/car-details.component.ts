import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CarsActions } from "../../store/cars/cars.actions";
import { NgRedux } from "ng2-redux/lib";
import { IAppState } from "../../store/app-state";
import { CarDetailsModel } from "../car-details.model";
import { CarReviewModel } from '../car-review.model';
import { log } from 'util';
// import { CarReviewModel } from "../car-review.model";


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  
  review: CarReviewModel;
  reviews;
  car: CarDetailsModel;

  constructor(
    private carsActions: CarsActions,
    private router: Router,
    private route: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const id = params['id']

        this.carsActions.carDetails(id);
        this.carsActions.getReviews(id);
        

        this.ngRedux
          .select(state => state.cars)
          .subscribe(cars => {
            this.car = cars.carDetails;
            this.reviews = cars.allReviews;
          });


      })

    this.review = new CarReviewModel(3);
  }

  like() {
    this.carsActions.likeCar(this.car.id);

    this.ngRedux
      .select(state => state.cars)
      .subscribe(cars => this.car = cars.carDetails)
  }

  sendReview() {
    this.carsActions.sendReview(this.car.id, this.review)
  }

}
