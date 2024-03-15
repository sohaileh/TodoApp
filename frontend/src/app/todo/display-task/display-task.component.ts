import { Component, inject, OnInit, DoCheck } from '@angular/core';
import { DisplayUser } from '../../models/displayUser';
import { UsersServiceService } from '../../Services/users-service.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrl: './display-task.component.scss'
})
export class DisplayTaskComponent {
  userService: UsersServiceService = inject(UsersServiceService)
  userTaskDb: any;
  Id:string;
  ngOnInit() {
    // this.userService.getAllTasks().subscribe(res => {
    //   this.userTaskDb = res;
    //   console.log(res);
    // })
  }
}
