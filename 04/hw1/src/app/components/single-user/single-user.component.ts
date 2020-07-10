import {Component, OnInit} from '@angular/core';
import {UserService} from '../../servise/user.service';
import {IUser} from '../../models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  user: IUser;

  // constructor(private service: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.params.subscribe(value => this.service.getSingleUsers(value.id).subscribe(value1 => this.user = value1));
  // }
  constructor() {
    this.user = history.state.user;
  }

  ngOnInit(): void {
  }

}
