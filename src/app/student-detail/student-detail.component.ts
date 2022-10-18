//import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { Component, OnInit, Input } from '@angular/core';
import { STUDENT } from '../mock-studant';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

//@Input() student?: Student;

export class StudentDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
