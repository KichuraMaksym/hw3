import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any[];

  constructor(private http: HttpClient) {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe(value => this.user = value);
  }

  ngOnInit(): void {
  }

}
