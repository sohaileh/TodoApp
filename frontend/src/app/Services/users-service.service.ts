import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostUser } from '../models/postUser';
import { AddTask } from '../models/addTask';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }
  userTaskDb: any;

  //register
  postUser(data: PostUser) {
    this.http.post('http://localhost:3000/auth/signup', data).subscribe(res => console.log("registered"))
  }
  // add Task
  addTask(data: AddTask) {
    this.http.post('http://localhost:3000/task/addtask/65e9a8b3945f2342fe77f47d', data).subscribe(res => {
      this.getAllTasks()
    })
  }
  // login
  logIn(data: any) {
    this.http.post('http://localhost:3000/auth/login', data).subscribe(res => console.log(res))
  }
  //get all tasks
  getAllTasks() {
    return this.http.get('http://localhost:3000/task/gettasks/65e9a8b3945f2342fe77f47d');
  }

}
