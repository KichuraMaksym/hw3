import {Component} from '@angular/core';
import {User} from "../../interface/user";
import {ServService} from "../../serv.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practic';
  users: User[];

  constructor(private service: ServService) {
    this.service.getAllUsers().subscribe(value => this.users = value);
  }

}
