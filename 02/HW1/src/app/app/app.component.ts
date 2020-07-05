import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../interfases/post";
import {PostService} from "../servises/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  popst: Post;

  // constructor(private http: HttpClient) {
  //   this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts`).subscribe(value => this.popst = value);
  // }
  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(value => this.popst = value)
  }
}
