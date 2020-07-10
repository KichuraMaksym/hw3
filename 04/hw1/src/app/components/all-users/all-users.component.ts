import {Component, OnInit} from '@angular/core';
import {IUser} from '../../models/user';
import {UserService} from '../../servise/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: IUser[];

  constructor(private service: UserService, private router: Router) {
    this.service.getUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

  toUserDetails(user) {
    this.router.navigate(['users', user.id], {state: {user}});
  }
}
