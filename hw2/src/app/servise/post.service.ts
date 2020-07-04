import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Posts} from "../models/posts";
import {Comment} from "../models/comment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getSinglePost(postId): Observable<Posts[]> {
    return this.http.get<Posts[]>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  getConnetntsOfSingleId(postId): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }

}
