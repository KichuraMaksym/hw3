import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {Post} from "../interface/post";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];

  constructor(private service: ServiceService) {
    this.service.getAllPosts().subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }

}
