import { Injectable } from '@angular/core';
import { HttpClientModel } from '../../models/core/httpclient.model';

@Injectable()
export class HttpClientService {
    constructor() {
    }

    post(model: HttpClientModel) {
        //make post request to API
        console.log("post url=" + model.url);
        console.log("post data=" + model.data.length);
    }

}