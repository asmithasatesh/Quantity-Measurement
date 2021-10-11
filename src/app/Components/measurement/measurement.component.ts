import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  from:string="Meter";
  to="Centimeter";
  fromtext=1;
  state="length";
}
