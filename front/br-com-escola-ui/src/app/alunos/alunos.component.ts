import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  linguas: Array<any>;
  turmas: Array<any>;
  constructor() {
    this.linguas = [
      {name: 'Espanhol', code: 'ESP'},
      {name: 'Inglês', code: 'ING'}
  ];
  this.turmas = [
    {name: '1º A'},
    {name: '1º B'}
];
  }

  ngOnInit() {
  }

}
