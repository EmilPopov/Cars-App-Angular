import { Component, OnInit } from '@angular/core';
import { LoginUserModel } from "../models/user-login.model";
import { UserActions } from "../../store/user/user.actions";
import { AuthService } from "../../shared/core/auth.service";
import { NgRedux } from "ng2-redux/lib";
import { Router } from "@angular/router";
import { IAppState } from "../../store/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginUserModel = new LoginUserModel();


  constructor(
    private authService: AuthService,
    private userActions: UserActions,
    private ngRedux: NgRedux<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(user) {

    this.userActions.login(this.user);

    this.ngRedux.select(state => state.user)
      .subscribe(users => {
        if (users.userAuthenticated) {
          this.authService.saveUser(users.username);
          this.authService.authenticateUser(users.token)

          this.router.navigateByUrl('/')
        }

      });

  }

}
