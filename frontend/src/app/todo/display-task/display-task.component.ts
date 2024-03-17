import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../../Services/users-service.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrl: './display-task.component.scss'
})
export class DisplayTaskComponent {
  constructor(private userService: UsersServiceService) { }
  userTaskDb: any;
  ngOnInit(): void {
    this.userService.getAllTasks().subscribe((res) => {
      this.userTaskDb = res;
    })
    this.userService.addTaskClicked.subscribe(data => {
      this.userTaskDb = data
    });
  }

}
