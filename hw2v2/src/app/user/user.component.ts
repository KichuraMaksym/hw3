import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interface/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  posts: any[];
  users: User[];

  constructor(private http: HttpClient) {
    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(value => this.users = value);
  }
  getPosts(postId){
    return this.posts = postId
  }
  ngOnInit(): void {
  }

}
