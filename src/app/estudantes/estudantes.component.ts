import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { STUDENT } from '../mock-studant';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  selectedStud?: student;
  onSelect(Parastud: student): void {
    this.selectedStud = Parastud;
  }

 student: student = {
    id: 5124,
    name: 'Ana Carolina Machado',
    data: 22032006,
    serie: 'Segundo ano do ensino médio'
  };

  students = STUDENT;


  constructor() { }

  ngOnInit(): void {
  }

}
