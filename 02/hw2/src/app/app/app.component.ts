import { Component } from '@angular/core';
import {PostsService} from "../servises/posts.service";
import {Post} from "../interface/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw2';
  post: Post;
  constructor(private postService: PostsService) {
    this.postService.getPosts().subscribe(value => this.post = value);
  }
}
