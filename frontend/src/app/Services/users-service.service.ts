import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostUser } from '../models/postUser';
import { AddTask } from '../models/addTask';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  //post
  postUser(data: PostUser) {
    this.http.post('http://localhost:3000/auth/signup', data).subscribe()
  }
  // add Task
  addTask(data: AddTask) {
    this.http.post('http://localhost:3000/task/addtask', data).subscribe(res => { console.log(res) })
  }
  // login
  logIn(data: any) {
    this.http.post('http://localhost:3000/auth/login ', data).subscribe(res => console.log(res))
  }
}
