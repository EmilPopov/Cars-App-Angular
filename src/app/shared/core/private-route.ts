import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";



@Injectable()
export class PrivateRoute implements CanActivate {

    constructor(private authService: AuthService) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.authService.isAuthenticated();
    }

}