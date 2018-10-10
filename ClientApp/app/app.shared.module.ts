import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';


import { UserService } from './services/core/user.service';
import { HttpClientService } from './services/core/httpclient.service';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/user/add.user.component';
import { UserModel } from './models/core/user.model';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        LoginComponent,
        UserComponent,
        AddUserComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'user', component: UserComponent },
            { path: 'add-user', component: AddUserComponent },




            { path: '**', redirectTo: 'home' },
        ])
    ],
    providers: [
        HttpClientService,
        UserService,
        UserModel
    ]
})
export class AppModuleShared {
}
