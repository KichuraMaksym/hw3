import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tooneuser',
  templateUrl: './tooneuser.component.html',
  styleUrls: ['./tooneuser.component.css']
})
export class TooneuserComponent implements OnInit {
  @Input()
  userId: any;
  constructor() { }

  ngOnInit(): void {
  }

}
