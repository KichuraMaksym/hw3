import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AllUserComponent} from './all-user/all-user.component';
import {ServiceService} from "./service.service";
import {UserComponent} from './user/user.component';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {AllCommentsComponent} from './all-comments/all-comments.component';
import {PostComponent} from './post/post.component';
import {CommentComponent} from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    UserComponent,
    AllPostsComponent,
    AllCommentsComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'showAllUsers', component: AllUserComponent},
      {path: 'showAllPosts', component: AllPostsComponent},
      {path: 'showAllComments', component: AllCommentsComponent},
      {path: 'posts/:id', component: AllPostsComponent}
    ])
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
