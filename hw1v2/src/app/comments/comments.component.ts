import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: any[];
  constructor(private a:HttpClient) {
    this.a
      .get<any>('https://jsonplaceholder.typicode.com/comments?_limit=10')
      .subscribe(value => this.comment =value);
  }

  ngOnInit(): void {
  }

}
