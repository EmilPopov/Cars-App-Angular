import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./users/register/register.component";
import { LoginComponent } from "./users/login/login.component";

const routes: Routes = [

  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class appRoutesModule { }
