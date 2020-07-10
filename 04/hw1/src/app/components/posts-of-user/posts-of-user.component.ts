import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/post";
import {PostService} from "../../servise/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.css']
})
export class PostsOfUserComponent implements OnInit {
  @Input() userId: any;
  posts: IPost[];

  constructor(private service: PostService, private route: ActivatedRoute) {
    this.route.params.subscribe(value => this.service.getPosts(value.id).subscribe(value1 => this.posts = value1));
  }

  ngOnInit(): void {
  }


}
