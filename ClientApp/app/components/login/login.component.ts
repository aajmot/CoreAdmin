import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../models/core/user.model';
import { UserService } from '../../services/core/user.service';
import { ActionResultModel } from '../../models/core/actionresult.model';
import { Router } from '@angular/router';

//import { UserService } from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    private _actionResultModel: ActionResultModel;

    constructor(public model: UserModel, private router: Router, private _userService: UserService) {

    }
    ngOnInit() {
        localStorage.setItem('user', "");
    }

    loginUser() {
        this._actionResultModel = this._userService.authenticateUser(this.model);
        if (this._actionResultModel != null) {
            if (this._actionResultModel.status) {
                this.router.navigate(['/home']);
            }
            else {
                console.log("login failed");
            }
        }
        else {
            this._actionResultModel = new ActionResultModel();
            this._actionResultModel.messages.push("credentials required");
            this._actionResultModel.status = false;
        }

    }

}
