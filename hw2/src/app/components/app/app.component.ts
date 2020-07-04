import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Posts} from "../../models/posts";
import {PostService} from "../../servise/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: Posts[];

  constructor(pos: PostService) {
    pos.getPosts().subscribe(value => this.post = value);
  }
}
