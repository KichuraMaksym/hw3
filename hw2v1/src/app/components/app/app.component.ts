import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../../interface/post";
import {PostService} from "../servises/post/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }
}
