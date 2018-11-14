import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private router: Router, private _userService: UserService) { }

    canActivate(): boolean {

        let _user = localStorage.getItem("user");
        if (_user != undefined) {
            //if (this._userService.isUserLoggedIn) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
} 