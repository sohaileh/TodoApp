import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersServiceService } from '../../Services/users-service.service';



@Component({
  selector: 'add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss'
})
export class AddTasksComponent implements OnInit {
 
  userService: UsersServiceService = inject(UsersServiceService);
  showDisplayTasks:boolean = true;
  EditUser:any;
  todoForm: FormGroup;

  ngOnInit(): void {
  
    this.userService.editTaskClicked.subscribe((data:boolean)=>{
      this.showDisplayTasks = data;
    })
    this.todoForm = new FormGroup({
      content: new FormControl('', [Validators.required])
    });

  }

  onAddTask() {
    // console.log(this.todoForm);
    if (this.todoForm.valid && this.showDisplayTasks) {
      this.userService.addTask(this.todoForm.value).subscribe(() => {
        this.userService.getAllTasks().subscribe(res => {
          this.userService.onAddTaskClicked(res)
          
        })
      })
    }
    else{
       console.log(this.todoForm);
    }
        this.todoForm.reset()
        
  }
  
}
