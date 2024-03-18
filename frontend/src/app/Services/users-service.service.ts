import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostUser } from '../models/postUser';
import { AddTask } from '../models/addTask';
import {Task } from '../models/Task';


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

  //onAddTask
    addTaskClicked: EventEmitter<any> = new EventEmitter<any>();
    onAddTaskClicked(data: any) {
      this.addTaskClicked.emit(data);
    }

  //oneEditTask
   editTaskClicked : EventEmitter<boolean> = new EventEmitter<boolean>();
   onEditTaskClicked(data: boolean) {
    this.editTaskClicked.emit(data);
  }


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
    return this.http.get(`http://localhost:3000/task/gettasks/${this.Id}`)
  }





  //delete a specific task
  deleteTask(id:string){
   return this.http.delete(`http://localhost:3000/task/deletetask/${id}`);
    

  }

  //Edit a specific task
  editTask(data){
    this.http.patch(`http://localhost:3000/task/updatetask/65f7cc1c611b73cb9311d087`,data);

  }

}
