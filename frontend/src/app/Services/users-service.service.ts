import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostUser } from '../models/postUser';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  //post
  postUser(data: PostUser) {
    this.http.post('http://localhost:3000/auth/signup', data).subscribe()
  }
}
