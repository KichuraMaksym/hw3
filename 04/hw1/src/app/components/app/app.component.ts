import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw1';
  constructor(private router: Router) {
  }
  showAllUsers(): void {
  this.router.navigate( ['users']);
  }

  hide() {
    this.router.navigate(['']);
  }
}
