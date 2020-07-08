import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {Post} from "../interface/post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];

  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute) {
    if (!!this.activatedRoute.snapshot.params.id) {
      this.service.getPostOfUser(this.activatedRoute.snapshot.params.id).subscribe(value => this.posts = value);
    } else {
      this.service.getAllPosts().subscribe(value => this.posts = value);
    }
  }

  ngOnInit(): void {
  }

}
