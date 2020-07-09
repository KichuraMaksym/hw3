import {Component, OnInit} from '@angular/core';
import {S1Service} from "../../s1.service";
import {IComment} from "../../interface/comment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private service: S1Service, private activatedRoute: ActivatedRoute) {
    if (!!this.activatedRoute.snapshot.params.id) {
      this.service.getCommentsOfPost(this.activatedRoute.snapshot.params.id).subscribe(value => this.comments = value);
    } else {
      this.service.getComments().subscribe(value => this.comments = value);
    }
  }

  ngOnInit(): void {
  }

}
