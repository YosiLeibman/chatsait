import { Component, OnInit } from '@angular/core';
import { MeasurementService } from 'src/app/measurement.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-add-measurement',
  templateUrl: './add-measurement.component.html',
  styleUrls: ['./add-measurement.component.css']
})
export class AddMeasurementComponent implements OnInit {
  localstudentsArr
  currStudentId
  constructor(public ms: MeasurementService, public auth: AuthService) { }

  ngOnInit() {
    this.ms.getAllStudents().subscribe(
      res => this.localstudentsArr = res,
      err => console.log(err)
    )
  }
  changeHandller(id) {
    this.currStudentId = id
    console.log(id)
  }

  submitHandlle(s_id, length) {
    let newObj = {
      teacher_id: +localStorage.loggedTeacher,
      student_id: s_id,
      length: length
    }
    console.log(newObj)
    this.ms.addMeasurment(newObj).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
