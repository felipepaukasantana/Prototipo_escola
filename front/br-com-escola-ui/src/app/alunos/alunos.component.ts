import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  linguas: Array<any>;
  turmas: Array<any>;
  alunos: Array<any>;

  constructor() {
    this.linguas = [
      {name: 'Espanhol', code: 'ESP'},
      {name: 'Inglês', code: 'ING'}
    ];
    this.turmas = [
      {name: '1º A'},
      {name: '1º B'}
    ];
    this.alunos = [{id: '1', nome: 'Teste da silva', lingua: 'Inglês', turma: '1º A'},
                   {id: '2', nome: 'Teste da silva2', lingua: 'Espanhol', turma: '1º A'},
                   {id: '3', nome: 'Teste da silva2 dasdasdas', lingua: 'Espanhol', turma: '1º A'},
                   {id: '4', nome: 'Teste da silva2 dasssads', lingua: 'Espanhol', turma: '1º A'},
                   {id: '5', nome: 'Teste da silva2dddddd  dasdasdaczxcz', lingua: 'Espanhol', turma: '1º A'},
                   {id: '6', nome: 'Teste da silva2 bcvbcvb', lingua: 'Espanhol', turma: '1º A'},
                   {id: '7', nome: 'Teste da silva2 vvxcv', lingua: 'Inglês', turma: '1º B'},
                   {id: '8', nome: 'Teste da silva2vxvxcv', lingua: 'Espanhol', turma: '1º A'},
                   {id: '9', nome: 'Teste da silva2dasssad', lingua: 'Inglês', turma: '1º A'},
                   {id: '10', nome: 'Teste da silva2dasdas', lingua: 'Espanhol', turma: '1º B'},
                   {id: '11', nome: 'Teste da silva2 dasdas', lingua: 'Inglês', turma: '1º A'},
                   {id: '12', nome: 'Teste da silva2d sasdas', lingua: 'Espanhol', turma: '1º A'},
                   {id: '13', nome: 'Teste da silva2 dasd', lingua: 'Espanhol', turma: '1º A'},
                   {id: '14', nome: 'Teste da silva2 dasdasd', lingua: 'Inglês', turma: '1º B'}];
  }

  ngOnInit() {
  }
}
