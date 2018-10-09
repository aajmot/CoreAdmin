export class ActionResultModel {
    constructor() {
        this.status = false;
        this.id = 0;
        this.messages = new Array();
    }
    status: boolean;
    id: number;
    messages: Array<string>;
}