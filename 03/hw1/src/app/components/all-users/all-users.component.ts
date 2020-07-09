import {Component, OnInit} from '@angular/core';
import {S1Service} from "../../s1.service";
import {ActivatedRoute} from "@angular/router";
import {ajaxGetJSON} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: any;

  constructor(private service: S1Service, private ar: ActivatedRoute) {

    this.service.getUsers().subscribe(value => this.users = value);

  }
    ngOnInit()
  :
    void {}

  }
