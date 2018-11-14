import { Component } from '@angular/core';
import { UserService } from '../../services/core/user.service';
import { AppModel } from '../../models/core/app.model';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {


    constructor(public model: AppModel, private _userService: UserService) {
        this.model.isUserLoggedIn = this._userService.isUserLoggedIn();
    }
}
