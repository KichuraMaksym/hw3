import {Component, Input, OnInit} from '@angular/core';
import {User} from '../itnerface/user';
import {UserService} from '../service/user.service';
import {Post} from "../itnerface/post";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  usik: User[];
  @Input()
  post1: Post[];

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
  }

  logPosts(userId, postId): void {
    this.service.getPosts(userId).subscribe(value => {
      this.service.getComments(postId).subscribe(value1 => {
        console.log(value1);
      });
      for (const post of value) {
        console.log(`Пост номер ${post.id}: ${post.body}`);
        this.post = `Пост номер ${post.id}: ${post.body}`;
      }
    });
  };
}
