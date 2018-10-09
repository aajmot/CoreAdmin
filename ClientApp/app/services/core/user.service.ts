import { Injectable } from '@angular/core';
import { UserModel } from '../../models/core/user.model';

@Injectable()
export class UserService {

    constructor() {
    }

    authenticateUser(model: UserModel) {
        console.log("auth:" + model.username);
        console.log("auth:" + model.password);

        console.log("authenticateUser(); called");
    }

}