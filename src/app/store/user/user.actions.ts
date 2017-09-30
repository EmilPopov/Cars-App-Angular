import { Injectable } from "@angular/core";
import { NgRedux } from "ng2-redux";
import { IAppState } from '..'
import { UserService } from "../../users/user.service";

export const USER_REGISTERED = 'user/REGISTER';
export const USER_LOGED = 'user/LOGED';

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



}
