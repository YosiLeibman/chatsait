import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(public http: HttpClient) { }

  getAllStudents() {
    return this.http.get('http://localhost:3000/students')
  }

  getAllMeasurments() {
    return this.http.get('http://localhost:3000/all')
  }

  getMeasurementsById(id) {
    return this.http.get(`http://localhost:3000/${id}`)
  }

  addMeasurment(m) {
    return this.http.post(`http://localhost:3000/new-measurement`, m)
  }
}
