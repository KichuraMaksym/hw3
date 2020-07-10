import {Component, OnInit} from '@angular/core';
import {SerwService} from "../../serw.service";

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  users: any;

  constructor(private serwService: SerwService) {
    this.serwService.logUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
