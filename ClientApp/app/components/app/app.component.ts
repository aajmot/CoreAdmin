import { Component } from '@angular/core';
import { UserService } from '../../services/core/user.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private userService: UserService;

    constructor(_userService: UserService) {
        this.userService = _userService;
    }

    isUserLoggedIn() {
        console.log("isUserLoggedIn" + this.userService.isUserLoggedIn);
        return this.userService.isUserLoggedIn;
    }
}
