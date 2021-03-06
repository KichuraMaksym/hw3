import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../interfases/post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<any>{
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts`);
  }
  getComments(postID): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`);
  }
}
