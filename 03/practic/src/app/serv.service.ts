import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./interface/user";

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }
  getSingleUser(userid): Observable<User[]>{
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?userId=1`);
  }
}
