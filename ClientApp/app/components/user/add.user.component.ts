import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { UserModel } from '../../models/core/user.model';
import { UserService } from '../../services/core/user.service';

@Component({
    selector: 'add-user',
    templateUrl: './add.user.component.html'
})
export class AddUserComponent {

    constructor(public model: UserModel) {

    }
}