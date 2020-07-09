import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './components/users/users.component';
import {ServService} from "./serv.service";
import { ShowuserComponent } from './components/showuser/showuser.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ShowuserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'showuser', component: ShowuserComponent}
    ])
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
