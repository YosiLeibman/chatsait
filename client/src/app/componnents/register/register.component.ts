import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authservice: AuthService, public fb: FormBuilder) { }

  loginForm: FormGroup


  ngOnInit() {
    this.loginForm = this.fb.group({
      f_name: '',
      l_name: ''
    })
  }
  handleSubmit() {
    this.authservice.register(this.loginForm.value).subscribe(
      res => {
        console.log(res)
      },
      err => { throw err }
    )
  }

}
