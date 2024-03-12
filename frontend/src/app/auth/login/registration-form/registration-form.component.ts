import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent implements OnInit {
  snakeBar: MatSnackBar
  constructor(snakeBarRef: MatSnackBar) {
    this.snakeBar = snakeBarRef
  }
  userRegDetails: FormGroup;
  onFormSubmit() {
    console.log(this.userRegDetails)
    if (this.userRegDetails.invalid) {
      this.snakeBar.open("Please fill all the input fields with required details", "Dismiss")
    }
    return this.snakeBar.open("Registered successfully", "okay")
  }
  ngOnInit(): void {
    this.userRegDetails = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
  }
}
