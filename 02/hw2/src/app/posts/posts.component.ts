import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../interface/post";
import {PostsService} from "../servises/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  post: Post;
  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
  }
  logCom(postid){
    this.postService.logCom(postid).subscribe(value => console.log(value));
  };

}
