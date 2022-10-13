import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { STUDENT } from '../mock-studant';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  student = STUDENT;

  constructor() { }

  ngOnInit(): void {
  }

}
