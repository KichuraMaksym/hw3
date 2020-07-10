import { Component, OnInit } from '@angular/core';
import {SerwService} from "../../serw.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: any;
  constructor(private serw: SerwService) {
    this.serw.getPost().subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }

}
