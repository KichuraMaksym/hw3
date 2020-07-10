import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Iuser} from "./niterfases/Iuser";

@Injectable({
  providedIn: 'root'
})
export class SerwService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Iuser[]> {
    return  this.http.get<Iuser[]>(`https://jsonplaceholder.typicode.com/users`);
  }
  getPost(): Observable<any[]> {
    return  this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts`);
  }
  getUsersPost(userid): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
  }
  getComments(): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/comments`);
  }
  getCommnetsOfPost(postid): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`);
  }
}
