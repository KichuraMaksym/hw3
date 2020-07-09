import {Component, Input, OnInit} from '@angular/core';
import {User} from "../interface/user";
import {UserService} from "../service/user.service";
import {Observable} from "rxjs";
import {Posts} from "../interface/posts";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  usik: User;
  posts: Posts;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logPosts(userid){
    this.userService.getPosts(userid).subscribe(value => console.log(value));
    // this.userService.getPosts(userid).subscribe(value => this.posts = value);
  }
}
