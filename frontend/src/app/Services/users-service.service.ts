import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostUser } from '../models/postUser';
import { AddTask } from '../models/addTask';


interface loginres {
  _id: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }
  // userId :string;
  Id: string;

  //register
  postUser(data: PostUser) {
    this.http.post('http://localhost:3000/auth/signup', data).subscribe();
  }

  // add Task
  addTask(data: AddTask) {
    return this.http.post(`http://localhost:3000/task/addtask/${this.Id}`, data)
  }

  logIn(data: any) {
    const loginUrl = this.http.post<loginres>('http://localhost:3000/auth/login', data)
    loginUrl.subscribe(res => {
      this.Id = res._id
    })
    return loginUrl
  }
  //get all tasks
  getAllTasks() {
    const getReq = this.http.get(`http://localhost:3000/task/gettasks/${this.Id}`)
    getReq.subscribe()
    return getReq
  }

}
