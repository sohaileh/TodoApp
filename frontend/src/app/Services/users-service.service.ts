import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostUser } from '../models/postUser';
import { AddTask } from '../models/addTask';


interface loginres{
  _id:string;
  name:string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }
  userTaskDb: any;
  // userId :string;
  Id:string;

  //register
  postUser(data: PostUser) {
    this.http.post('http://localhost:3000/auth/signup', data).subscribe();
  }
 
  // add Task
  addTask(data: AddTask) {
    this.http.post(`http://localhost:3000/task/addtask/${this.Id}`, data).subscribe(res => {
      this.getAllTasks();
      console.log(res);
    })
  }
  // login
  logIn(data: any) {
    this.http.post<loginres>('http://localhost:3000/auth/login', data).subscribe((res) => {
        this.Id = res._id;
        this.getAllTasks();
        console.log(res);
       
    })
  }
  //get all tasks
  getAllTasks() {
   this.http.get(`http://localhost:3000/task/gettasks/${this.Id}`).subscribe((res)=>{
        console.log(res)
        console.log(this.Id);
   });
  }

}
