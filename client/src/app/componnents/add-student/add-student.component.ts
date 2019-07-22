import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(public authservice: AuthService, public fb: FormBuilder) { }

  loginForm: FormGroup


  ngOnInit() {
    this.loginForm = this.fb.group({
      f_name: '',
      l_name: ''
    })
  }
  handleSubmit() {
    this.authservice.addNewStudent(this.loginForm.value).subscribe(
      res => console.log(res)
    )
  }
}
