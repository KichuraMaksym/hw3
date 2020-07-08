import { Component } from '@angular/core';
import {ServiceService} from "../service.service";
import {User} from "../interface/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw02AnotherRound';
  users: User;
  constructor(private service: ServiceService) {
    this.service.getUser().subscribe(value => this.users = value);
  }
}
