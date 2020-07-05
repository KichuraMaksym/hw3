import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interface/user";
import {Posts} from "../interface/posts";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient) { }
  getUser(){
    return  this.http.get<User>(`https://jsonplaceholder.typicode.com/users`);
  }
  getPosts(userId){
    return this.http.get<Posts>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  };
}
