import { Injectable } from '@angular/core';
import { UserModel } from '../../models/core/user.model';
import { ActionResultModel } from '../../models/core/actionresult.model';

@Injectable()
export class UserService {
    public isUserLoggedIn: boolean;

    actionResultModel: ActionResultModel;

    constructor() {
        this.actionResultModel = new ActionResultModel();
        this.isUserLoggedIn = false;
    }

    authenticateUser(model: UserModel) {
        if (model.userName == "admin" && model.password == "admin") {
            this.actionResultModel.status = true;
            this.isUserLoggedIn = true;
            this.actionResultModel.messages.push("login successfull");
        }
        else {
            this.actionResultModel.status = false;
            this.actionResultModel.messages.push("invalid username/pasword");
        }
        return this.actionResultModel;
    }

}