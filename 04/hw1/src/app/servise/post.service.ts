import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../models/post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }
  getPosts(userId): Observable<IPost[]>{
    return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
