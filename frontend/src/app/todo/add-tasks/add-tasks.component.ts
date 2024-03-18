import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersServiceService } from '../../Services/users-service.service';


@Component({
  selector: 'add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss'
})
export class AddTasksComponent implements OnInit {
  todoForm: FormGroup;
  userService: UsersServiceService = inject(UsersServiceService);
  showDisplayTasks:boolean = true;

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      content: new FormControl('', [Validators.required])
    });
    this.userService.editTaskClicked.subscribe((data:boolean)=>{
      this.showDisplayTasks = data;
    })
  }

  onAddTask() {
    if (this.todoForm.valid && this.showDisplayTasks) {
      this.userService.addTask(this.todoForm.value).subscribe(() => {
        this.userService.getAllTasks().subscribe(res => {
          this.userService.onAddTaskClicked(res)
       
        })
      })
    }
    else{
      this.todoForm.setValue(this.todoForm.value);
    }
        // this.todoForm.reset()
  }
  
}
