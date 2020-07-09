import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interface/user";
import {ServService} from "../../serv.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  usik: User;

  ngOnInit(): void {
  }

}
