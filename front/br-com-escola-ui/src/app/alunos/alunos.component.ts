import { Component, OnInit } from '@angular/core';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  linguas: Array<any>;
  turmas: Array<any>;
  alunos: Array<any>;

  constructor(private alunoService: AlunoService) {
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
    this.listar();
  }

  listar() {
    this.alunoService.listar().subscribe(response => this.alunos = response);
  }
}
