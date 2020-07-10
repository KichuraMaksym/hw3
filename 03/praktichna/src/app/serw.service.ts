import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SerwService {

  constructor(private http: HttpClient) { }
  logUsers(): Observable<any[]>{
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users`);
  }
}
