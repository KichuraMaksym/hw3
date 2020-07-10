import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {SingleUserComponent} from './components/single-user/single-user.component';
import {UserResolveService} from "./servise/user-resolve.service";
import {CanGoService} from "./servise/can-go.service";
import {PostsOfUserComponent} from './components/posts-of-user/posts-of-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    SingleUserComponent,
    PostsOfUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: AllUsersComponent,
        resolve: {xxx: UserResolveService},
        canActivate: [CanGoService],
        children: [
          {
            path: ':id', component: SingleUserComponent, children: [
              {path: 'posts/:id', component: PostsOfUserComponent}
            ]
          },
        ]
      },
      {path: 'hide', component: AppComponent},
    ])
  ],
  providers: [UserResolveService, CanGoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
