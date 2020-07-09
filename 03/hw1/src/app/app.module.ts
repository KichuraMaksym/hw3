import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { AllUsersComponent } from './components/all-users/all-users.component';
import {S1Service} from "./s1.service";
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    CommentComponent,
    PostComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'showUsers', component: AllUsersComponent},
      {path: 'showPosts', component: AllPostsComponent},
      {path: 'post/:id', component: AllPostsComponent},
      {path: 'showComments', component: AllCommentsComponent},
      {path: 'comment/:id', component: AllCommentsComponent}
    ])
  ],
  providers: [S1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
