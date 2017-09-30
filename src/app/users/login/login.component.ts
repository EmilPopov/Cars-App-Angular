import { Component, OnInit } from '@angular/core';
import { LoginUserModel } from "../models/user-login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginUserModel = new LoginUserModel();


  constructor() { }

  ngOnInit() {
  }

  login(user) {
    this.user = user

    console.log(user);

  }

}
