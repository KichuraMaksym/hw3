import {Component, OnInit} from '@angular/core';
import {Post} from "../../interface/post";
import {S1Service} from "../../s1.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];

  constructor(private service: S1Service, private activatedRoute: ActivatedRoute) {
    if (!! this.activatedRoute.snapshot.params.id){
      this.service.getPostsOfUser(this.activatedRoute.snapshot.params.id).subscribe(value => this.posts = value);
    }else {
      this.service.getPosts().subscribe(value => this.posts = value);
    }
  }

  ngOnInit(): void {
  }

}
