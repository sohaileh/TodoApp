import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersServiceService } from '../../../Services/users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  snakeBar: MatSnackBar;

  constructor(
    private userService: UsersServiceService,
    snakeBarRef: MatSnackBar,
    ) 
    {
      this.snakeBar = snakeBarRef;
     }
  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(4)])
    });
  }

  onSubmit() {
    if(this.LoginForm.valid){
      this.userService.logIn(this.LoginForm.value);
      this.LoginForm.reset();
      return this.snakeBar.open("Login Successfully", "Okay") ;
    }
    else{
      return this.snakeBar.open("Please fill all the input fields with required details", "Dismiss")
    }
  }
}
