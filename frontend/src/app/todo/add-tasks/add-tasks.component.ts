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
  userService: UsersServiceService = inject(UsersServiceService)
  ngOnInit(): void {
    this.todoForm = new FormGroup({
      content: new FormControl('', [Validators.required])
    })
  }
  onAddTask() {
    if (this.todoForm.valid) {
      this.userService.addTask(this.todoForm.value);
    }
  }
}
