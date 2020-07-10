import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http: HttpClient) { }
  getUsers(): Observable<IUser[]>{
    return this.Http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`);
  }
  getSingleUsers(userid): Observable<IUser>{
    return this.Http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${userid}`);
  }
}
