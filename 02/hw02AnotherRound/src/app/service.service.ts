import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./interface/user";
import {Observable} from "rxjs";
import {Posts} from "./interface/posts";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getUser(): Observable<User>{
    return  this.http.get<User>(`https://jsonplaceholder.typicode.com/users`);
  }
  getPosts(userID): Observable<Posts>{
    return  this.http.get<Posts>(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
  }
}
