import { Injectable } from '@angular/core';

@Injectable()
export class HttpClientService {
    constructor() {
    }

    post(url: string, model: object) {
        //make post request to API
        console.log("post url=" + url);
        console.log("post data=" + model);
    }

}