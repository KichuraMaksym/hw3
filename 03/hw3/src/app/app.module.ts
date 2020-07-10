import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {SerwService} from "./serw.service";
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserComponent} from './components/user/user.component';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostComponent} from './components/post/post.component';
import {AllCommentComponent} from './components/all-comment/all-comment.component';
import {CommentComponent} from './components/comment/comment.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    AllCommentComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'post/:id', component: PostComponent},
      {path: 'showuser', component: UserComponent}
    ])
  ],
  providers: [SerwService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
