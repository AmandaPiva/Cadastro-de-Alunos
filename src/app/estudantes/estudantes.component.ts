import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  student = 'Ana Carolina Machado';

  constructor() { }

  ngOnInit(): void {
  }

}
