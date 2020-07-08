import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../itnerface/user';
import {Observable} from 'rxjs';
import {Post} from '../itnerface/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users`);
  }

  getPosts(userId): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getComments(postId): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
