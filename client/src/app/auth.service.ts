import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient, public router: Router) { }

  isLoggedIn() {
    return !!localStorage.getItem('loggedTeacher')
  }

  login(user) {
    return this.http.post('http://localhost:3000/login', user)
  }

  register(user) {
    return this.http.post('http://localhost:3000/register', user)
  }

  logout() {
    localStorage.removeItem('loggedTeacher')
    this.router.navigateByUrl('/login')
  }

  addNewStudent(user) {
    return this.http.post('http://localhost:3000/new-student', user)
  }


}
