import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {IComment} from "../interface/comment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private serviceService: ServiceService, private activatedRoute: ActivatedRoute) {
    if (!!this.activatedRoute.snapshot.params.id) {
      this.serviceService.getCommentOfPost(this.activatedRoute.snapshot.params.id).subscribe(value => this.comments = value);
      console.log(this.activatedRoute.snapshot.params.id);
    } else {
      this.serviceService.getAllComments().subscribe(value => this.comments = value);
      console.log(this.activatedRoute.snapshot.params.postId);

    }
  }

  ngOnInit(): void {
  }

}
