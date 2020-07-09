import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interface/user";
import {ServService} from "../../serv.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  // @Input()
  user1: User[];

 constructor(private service: ServService) {
   this.service.getSingleUser(1).subscribe(value => this.user1 = value);
 }

  ngOnInit(): void {
  }

}
