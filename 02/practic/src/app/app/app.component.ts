import { Component } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../itnerface/user";
import {Post} from "../itnerface/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practic';
  user: User;
  post: Post;
  constructor(private service: UserService) {
    this.service.getUser().subscribe(value => this.user = value);
    this.service.getPosts().subscribe(value => this.post = value);
  }

}
