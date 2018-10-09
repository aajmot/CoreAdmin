import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../models/core/user.model';
import { UserService } from '../../services/core/user.service';

//import { UserService } from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public model: UserModel;

    constructor(private userService: UserService) {
        this.model = new UserModel();
    }

    loginUser() {
        this.userService.authenticateUser(this.model);
    }

}
