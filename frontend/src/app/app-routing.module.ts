import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/Login/login.component';
import { RegistrationFormComponent } from './auth/login/registration-form/registration-form.component';
import { HomeComponent } from './Shared/home/home.component';
import { AddTasksComponent } from './todo/add-tasks/add-tasks.component';
import { DisplayTaskComponent } from './todo/display-task/display-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect empty path to 'home'
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'addtask', component: AddTasksComponent },
  { path: 'displaytask', component: DisplayTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
