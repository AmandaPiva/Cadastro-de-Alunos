import { Component, OnInit } from '@angular/core';
import { student } from '../student';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  student: student = {
    id: 5124,
    name: 'Ana Carolina Machado',
    data: 22032006,
    serie: 'Segundo ano do ensino médio'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
