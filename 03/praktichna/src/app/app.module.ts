import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import {HttpClientModule} from "@angular/common/http";
import {SerwService} from "./serw.service";
import { OneUserComponent } from './components/one-user/one-user.component';
import {RouterModule} from "@angular/router";
import { TooneuserComponent } from './components/tooneuser/tooneuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    OneUserComponent,
    TooneuserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'tooneuser', component: OneUserComponent}
    ])
  ],
  providers: [SerwService],
  bootstrap: [AppComponent]
})
export class AppModule { }
