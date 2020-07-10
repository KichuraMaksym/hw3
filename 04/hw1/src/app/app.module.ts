import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
