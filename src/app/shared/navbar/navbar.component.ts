import { Component, OnInit } from '@angular/core';
import { NgReduxModule, NgRedux } from "ng2-redux";
import { IAppState } from "../../store";
import { UserActions } from "../../store/user/user.actions";

import { AuthService } from "../core/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  authenticated: boolean = false;
  username: string = null;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private userActions: UserActions,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ngRedux
      .select(state => state.user)
      .subscribe(user => {
        this.authenticated = user.userAuthenticated;
        this.username = user.username;
      })

  }

  logout() {
    this.userActions.logout();

    this.authService.deauthenticateUser();

    this.authService.removeUser();

    this.router.navigateByUrl('/')

  }

}
