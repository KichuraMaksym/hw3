import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {
  @Input()
  user: any;
  constructor() { }

  ngOnInit(): void {
  }

}
