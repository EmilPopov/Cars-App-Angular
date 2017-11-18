import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from "../shared/core/core.module";
import { RouterModule } from '@angular/router';


import { CarsService } from "./cars.service";
import { AddCarComponent } from './add-car/add-car.component';
import { CarsActions } from "../store/cars/cars.actions";
import { ListCarsComponent } from '../cars/list-cars/list-cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    CoreModule
  ],
  declarations: [AddCarComponent, ListCarsComponent, CarDetailsComponent],
  providers: [CarsService, CarsActions],
  exports: []
})
export class CarsModule { }
