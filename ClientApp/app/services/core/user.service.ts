import { Injectable } from '@angular/core';
import { UserModel } from '../../models/core/user.model';
import { ActionResultModel } from '../../models/core/actionresult.model';
import { UserComponent } from '../../components/user/user.component';
import { HttpClientService } from './httpclient.service';
import { HttpClientModel } from '../../models/core/httpclient.model';

@Injectable()
export class UserService {
    private _isUserLoggedIn: boolean;

    constructor(private _actionResultModel: ActionResultModel,
        private _service: HttpClientService,
        private _httpModel: HttpClientModel) {
        this._isUserLoggedIn = false;
    }


    isUserLoggedIn() {
        let _user = localStorage.getItem("user");
        if (_user != undefined && _user != "") {
            return true;
        }
        return false;
    }
    authenticateUser(model: UserModel) {
        if (model.userName == "admin" && model.password == "admin") {
            this._actionResultModel.status = true;
            this._actionResultModel.messages = [];
            localStorage.setItem('user', model.userName);
        }
        else {
            this._actionResultModel.status = false;
            this._actionResultModel.messages.push("invalid username/pasword");
        }
        console.log(this._actionResultModel.status);
        return this._actionResultModel;
    }

    create(model: UserModel) {
        this._httpModel.url = "localhost:9090/api/user"
        this._httpModel.data = ["some user data"]
        this._service.post(this._httpModel);

    }

}