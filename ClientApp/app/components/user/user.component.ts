import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { UserModel } from '../../models/core/user.model';
import { UserService } from '../../services/core/user.service';

@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})
export class UserComponent {
    userList: UserModel[];
    constructor() {
        this.userList = new Array();
        let user1: UserModel = new UserModel();
        user1.userName = "Admin";
        user1.password = "Admin";
        this.userList.push(user1);
    }
}