import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersServiceService } from '../../../Services/users-service.service';


@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent implements OnInit {
  snakeBar: MatSnackBar
  constructor(snakeBarRef: MatSnackBar, private userService: UsersServiceService) {
    this.snakeBar = snakeBarRef
  }
  userRegDetails: FormGroup;
  onFormSubmit() {
    console.log(this.userRegDetails.value)
    if (this.userRegDetails.invalid) {
      return this.snakeBar.open("Please fill all the input fields with required details", "Dismiss")
    } else {
      console.log(this.userRegDetails.value)
      this.userService.postUser(this.userRegDetails.value);
      this.userRegDetails.reset()
      return this.snakeBar.open("User Registered Successfully", "Okay")
    }
  }
  ngOnInit(): void {
    this.userRegDetails = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
  }
}
