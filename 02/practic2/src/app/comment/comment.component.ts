import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../interface/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  commet: IComment;
  constructor() { }

  ngOnInit(): void {
  }

}
