import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./interface/post";
import {IComment} from "./interface/comment";

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPostsOfUser(userid): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
  }

  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/comments`);
  }
  getCommentsOfPost(postId): Observable<IComment[]>{
    return this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
