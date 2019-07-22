import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authservice: AuthService, public fb: FormBuilder, public router: Router) { }

  loginForm: FormGroup


  ngOnInit() {
    this.loginForm = this.fb.group({
      f_name: '',
      l_name: ''
    })
  }
  handleSubmit() {
    this.authservice.login(this.loginForm.value).subscribe(
      res => {
        if (res[0].id) {
          localStorage.setItem('loggedTeacher', res[0].id)
          console.log(res[0].id)
          this.router.navigateByUrl('/')
        } else {
          console.log('no user')
          console.log(res)
        }
      },
      err => { throw err }
    )
  }
}
