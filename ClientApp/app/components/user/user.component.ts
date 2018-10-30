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
        let user2: UserModel = new UserModel();
        user2.userName = "Manager";
        user2.password = "manager@123";
        this.userList.push(user2);
        let user3: UserModel = new UserModel();
        user3.userName = "SalesManager";
        user3.password = "salesmanager@123";
        this.userList.push(user3);

    }
}