import {Component, OnInit} from '@angular/core';
import {SerwService} from "../../serw.service";
import {Iuser} from "../../niterfases/Iuser";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: Iuser[];

  constructor(private serwService: SerwService) {
    this.serwService.getUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
