import { Injectable } from "@angular/core";
import { NgRedux } from "ng2-redux";
import { IAppState } from '..'
import { UserService } from "../../users/user.service";

export const USER_REGISTERED = 'user/REGISTER';
export const USER_LOGGED = 'user/LOGGED';
export const USER_LOGOUT = 'user/LOGOUT';

@Injectable()
export class UserActions {
    constructor(
        private userService: UserService,
        private ngRedux: NgRedux<IAppState>) { }

    register(user) {
        this.userService
            .register(user)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: USER_REGISTERED,
                    result
                })
            }
            )
    }

    login(user) {
        this.userService
            .login(user)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: USER_LOGGED,
                    result
                })
            })
    }


    logout() {

        this.ngRedux.dispatch({
            type: USER_LOGOUT
        })

    }



}
