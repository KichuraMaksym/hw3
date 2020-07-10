import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {IUser} from "../models/user";
import {UserService} from "./user.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser[]>{

  constructor(private userService: UserService) { }
  resolve(): Observable<IUser[]> {
    return this.userService.getUsers();
  }
}
