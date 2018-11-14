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
import { FooterComponent } from './components/footer/footer.component';
import { ActionResultModel } from './models/core/actionresult.model';
import { HttpClientModel } from './models/core/httpclient.model';
import { AuthenticationGuard } from './services/core/authentication';
import { AppModel } from './models/core/app.model';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        FooterComponent,
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
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
            { path: 'counter', component: CounterComponent, canActivate: [AuthenticationGuard] },
            { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthenticationGuard] },
            { path: 'user', component: UserComponent, canActivate: [AuthenticationGuard] },
            { path: 'add-user', component: AddUserComponent, canActivate: [AuthenticationGuard] },


            { path: '**', redirectTo: 'login' },
        ])
    ],
    providers: [
        UserModel,
        ActionResultModel,
        HttpClientModel,
        AppModel,

        AuthenticationGuard,

        HttpClientService,
        UserService,
    ]
})
export class AppModuleShared {
}
