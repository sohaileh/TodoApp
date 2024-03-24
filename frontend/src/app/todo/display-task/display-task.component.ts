import { Component, Input, OnInit } from '@angular/core';
import { UsersServiceService } from '../../Services/users-service.service';
import { FormServiceService } from '../../Services/form-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrl: './display-task.component.scss'
})
export class DisplayTaskComponent {
  constructor(private userService: UsersServiceService,
    private formService: FormServiceService) { }
  userTaskDb: any[];
  // todoFormCopy:FormGroup = this.formService.todoForm;
  // taskId:number;
   ngOnInit(): void {
    console.log('Helo from display task');
    // console.log(todo)
    this.userService.getAllTasks().subscribe((res:any[]) => {
      this.userTaskDb = res;
      // console.log(this.userTaskDb)
    })
    this.userService.addTaskClicked.subscribe(data => {
      this.userTaskDb = data;
    });
    this.userService.editTaskForm.subscribe(data => {

      console.log(data);
    })
  
  }

  deleteTask(id: number) {

    const con = confirm('Do you want to delete this task permenantly ?');
    if (con) {
      this.userService.deleteTask(this.userTaskDb[id]._id).subscribe(() => {
        this.userTaskDb.splice(id,1)
      });
    }
  }

  editTask(id:number){
    this.userService.onEditTaskClicked(false);
    const specificTask = this.userTaskDb[id];
    console.log(specificTask);
    // console.log(this.todoFormCopy);
    // this.todoFormCopy.setValue(specificTask);
    this.userService.editTask(specificTask._id);
  }
}
