import {Component, Input, OnInit} from '@angular/core';
import {Iuser} from "../../niterfases/Iuser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  usik: Iuser;
  constructor() { }

  ngOnInit(): void {
  }

}
