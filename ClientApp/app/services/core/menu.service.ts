import { Injectable } from '@angular/core';
import { UserModel } from '../../models/core/user.model';
import { ActionResultModel } from '../../models/core/actionresult.model';
import { MenuModel } from '../../models/core/menu.model';

@Injectable()
export class MenuService {
    menuList: Array<MenuModel>;
    constructor() {
        this.menuList = new Array();
    }

    getAllMenus() {

        let menu1: MenuModel = new MenuModel();
        menu1.name = "Home";
        menu1.link = "/home";
        menu1.active = false;
        let menu2: MenuModel = new MenuModel();
        menu2.name = "Counter";
        menu2.link = "/counter";
        menu2.active = false;
        let menu3: MenuModel = new MenuModel();
        menu3.name = "Fetch data";
        menu3.link = "/fetch-data";
        menu3.active = false;

        let menu4: MenuModel = new MenuModel();
        menu3.name = "Login";
        menu3.link = "/login";
        menu3.active = false;

        this.menuList.push(menu1);
        this.menuList.push(menu2);
        this.menuList.push(menu3);
        return this.menuList;
    }



}