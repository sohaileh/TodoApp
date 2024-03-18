import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../../Services/users-service.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrl: './display-task.component.scss'
})
export class DisplayTaskComponent {
  constructor(private userService: UsersServiceService) { }
  userTaskDb: any[];
  // taskId:number;

  ngOnInit(): void {
    this.userService.getAllTasks().subscribe((res:any[]) => {
      this.userTaskDb = res;
      console.log(this.userTaskDb)
    })
    this.userService.addTaskClicked.subscribe(data => {
      this.userTaskDb = data;
    });
  }

  deleteTask(id: number) {

    const con = confirm('Do you want to delete this task permenantly ?');
    if (con) {
      const Id = this.userTaskDb[id];
      this.userService.deleteTask(Id._id).subscribe(() => {
        this.userTaskDb.splice(Id,1)
      });
    }
  }

  editTask(id:number){
    this.userService.onEditTaskClicked(false);
    // const Id = this.userTaskDb[id];
    // this.userService.editTask(Id._id);
  }
}
