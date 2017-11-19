import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./users/register/register.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./users/login/login.component";
import { AddCarComponent } from "./cars/add-car/add-car.component";
import { CarDetailsComponent } from "./cars/car-details/car-details.component";
import { StatsComponent } from "./stats/stats.component";
import { ListCarsComponent } from "./cars/list-cars/list-cars.component";
import { PrivateRoute } from "./shared/core/private-route";
import { ProfileComponent } from './users/profile/profile.component';


const routes: Routes = [
  // { path: '**', component: AppComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/profile', component: ProfileComponent },
  {
    path: 'cars',
    component: ListCarsComponent
  },
  {
    path: 'cars/details/:id',
    component: CarDetailsComponent,
    canActivate: [PrivateRoute]
  },
  {
    path: 'cars/add',
    component: AddCarComponent,
    canActivate: [PrivateRoute]
  },
  {
    path: 'stats',
    component: StatsComponent,
    canActivate: [PrivateRoute]
  }


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class appRoutesModule { }
