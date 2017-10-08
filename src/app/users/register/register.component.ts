import { Component, OnInit } from '@angular/core';
import { RegisterUserModel } from "../models/user-register.model";
import { Router } from "@angular/router";

import { NgReduxModule, NgRedux } from "ng2-redux";
import { IAppState, store } from "../../store";
import { UserActions } from '../../store/user/user.actions';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: RegisterUserModel = new RegisterUserModel();

  constructor(
    private userActions: UserActions,
    private ngRedux: NgRedux<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    this.userActions.register(this.user);

    this.ngRedux.select(state => state.user.userRegistered)
      .subscribe(userRegistered => {
        if (userRegistered) {
          this.router.navigateByUrl('users/login')
        }

      });
  }

}
