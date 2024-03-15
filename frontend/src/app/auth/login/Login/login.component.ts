import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersServiceService } from '../../../Services/users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  constructor(private userService: UsersServiceService) { }
  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(4)])
    });
  }

  onSubmit() {
    if (this.LoginForm.valid) {
      // Handle form submission logic here
      console.log(this.LoginForm.value);
      this.userService.logIn(this.LoginForm.value)
    } else {
      // Mark form controls as touched to trigger validation messages
      this.LoginForm.markAllAsTouched();
    }
  }
}
