import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { UserModel } from '../../models/core/user.model';
import { UserService } from '../../services/core/user.service';
import { HttpClientService } from '../../services/core/httpclient.service';

@Component({
    selector: 'add-user',
    templateUrl: './add.user.component.html'
})
export class AddUserComponent {

    constructor(public model: UserModel, private _service: UserService) {

    }
    resetModel() {
        this.model.userName = "";
        this.model.password = "";
    }
    addUser(model: UserModel) {

        this._service.create(model);
    }
    updateUser(model: UserModel) {
        //call service to add User in DB
    }


}