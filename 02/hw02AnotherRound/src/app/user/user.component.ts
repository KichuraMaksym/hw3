import {Component, Input, OnInit} from '@angular/core';
import {User} from "../interface/user";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  usik: User;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }
  logPosts(userId){
    this.service.getPosts(userId).subscribe(value => console.log(value));
  };
}
