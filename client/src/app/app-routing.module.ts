import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeasurementComponent } from './componnents/measurement/measurement.component';
import { RegisterComponent } from './componnents/register/register.component';
import { LoginComponent } from './componnents/login/login.component';
import { AddMeasurementComponent } from './componnents/add-measurement/add-measurement.component';
import { AddStudentComponent } from './componnents/add-student/add-student.component';

const routes: Routes = [
  { path: "", component: MeasurementComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "add-measurement", component: AddMeasurementComponent },
  { path: "add-student", component: AddStudentComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
