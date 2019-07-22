import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './componnents/register/register.component';
import { LoginComponent } from './componnents/login/login.component';
import { MeasurementComponent } from './componnents/measurement/measurement.component';
import { AddMeasurementComponent } from './componnents/add-measurement/add-measurement.component';
import { AddStudentComponent } from './componnents/add-student/add-student.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MeasurementComponent,
    AddMeasurementComponent,
    AddStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
