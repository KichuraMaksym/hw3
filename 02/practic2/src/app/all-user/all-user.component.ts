import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  users: any;

  constructor(private service: ServiceService) {
    this.service.getAllUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
