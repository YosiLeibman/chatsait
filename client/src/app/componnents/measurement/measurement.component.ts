import { Component, OnInit } from '@angular/core';
import { MeasurementService } from 'src/app/measurement.service';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  localMesurementsArr
  localstudentsArr
  constructor(public ms: MeasurementService) { }

  ngOnInit() {
    this.ms.getAllMeasurments().subscribe(
      res => this.localMesurementsArr = res,
      err => console.log(err)
    )
    this.ms.getAllStudents().subscribe(
      res => this.localstudentsArr = res,
      err => console.log(err)
    )
  }

  changeHandller(id) {
    console.log(id)
    this.ms.getMeasurementsById(id.value).subscribe(
      res => this.localMesurementsArr = res,
      err => console.log(err)
    )
  }
}
