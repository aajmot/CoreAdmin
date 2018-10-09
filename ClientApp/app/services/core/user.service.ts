import { Injectable } from '@angular/core';
import { UserModel } from '../../models/core/user.model';
import { ActionResultModel } from '../../models/core/actionresult.model';

@Injectable()
export class UserService {
    actionResultModel: ActionResultModel;

    constructor() {
        this.actionResultModel = new ActionResultModel();
    }

    authenticateUser(model: UserModel) {
        if (model.username == "admin" && model.password == "admin") {
            this.actionResultModel.status = true;
            this.actionResultModel.messages.push("login successfull");
        }
        else {
            this.actionResultModel.status = false;
            this.actionResultModel.messages.push("invalid username/pasword");
        }
        return this.actionResultModel;
    }

}