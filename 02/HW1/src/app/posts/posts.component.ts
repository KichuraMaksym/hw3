import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../interfases/post";
import {PostService} from "../servises/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  post: Post;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }
  onclik(postID){
    this.postService.getComments(postID).subscribe(value => console.log(value))
  }
}
