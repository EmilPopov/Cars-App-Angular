import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CarsActions } from "../../store/cars/cars.actions";
import { NgRedux } from "ng2-redux/lib";
import { IAppState } from "../../store/app-state";
import { CarDetailsModel } from "../car-details.model";
import { CarReviewModel } from '../car-review.model';
// import { CarReviewModel } from "../car-review.model";


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  review: CarReviewModel;
  isReviewSend:boolean;
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

        this.carsActions.carDetails(id)

        this.ngRedux
          .select(state => state.cars)
          .subscribe(cars => this.car = cars.carDetails);
      })

      this.review = new CarReviewModel(3);
  }

  like(){
     this.carsActions.likeCar(this.car.id);

     this.ngRedux
     .select(state => state.cars)
     .subscribe(cars => this.car = cars.carDetails)
  }

  sendReview(){
    this.carsActions.sendReview(this.car.id, this.review)

    this.ngRedux.select(state => state.cars).subscribe(cars => this.isReviewSend = cars.isReviewSend)
  }

}
