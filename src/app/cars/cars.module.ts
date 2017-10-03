import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCarComponent } from './add-car/add-car.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddCarComponent],
  exports: []
})
export class CarsModule { }
