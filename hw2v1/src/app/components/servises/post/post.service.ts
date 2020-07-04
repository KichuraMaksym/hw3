import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../../../interface/post";
import {Comment} from "../../../interface/comment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getSinglePost(postId): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }
  getCommetsOfSinglePost(postId): Observable<Comment[]>{
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  }
}
