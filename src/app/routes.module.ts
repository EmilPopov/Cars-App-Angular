import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./users/register/register.component";

const routes: Routes = [
  // { path:'', component:  },  
  { path: 'users/register', component: RegisterComponent },
  // { path: 'githubprofile', component: ProfileComponent },
  // { path: 'cars', component: CarsComponent },
  // { path: 'cars/add-car', component: CarFormComponent },
  // { path: 'cars/:id', component: CarDetailsComponent }
  // { path:'**', component: AppComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class carRoutesModule { }
