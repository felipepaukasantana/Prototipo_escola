import { Component, OnInit } from '@angular/core';
import { FormGroup } from '../../../node_modules/@angular/forms';
import { AlunoService } from './aluno.service';

import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  linguas: Array<any>;
  turmas: Array<any>;
  alunos: Array<any>;
  aluno: any;
  constructor(private alunoService: AlunoService,
    private messageService: MessageService) {

  }

  ngOnInit() {
    this.listar();
    this.listarLinguas();
    this.listarTurmas();
    this.aluno = {codigo: 0, nome: '', lingua: 0, turma: 0};
  }

  listarLinguas() {
    this.alunoService.listarLinguas().subscribe(response => this.linguas = response);
  }

  listarTurmas() {
    this.alunoService.listarTurmas().subscribe(response => this.turmas = response);
  }

  listar() {
    this.alunoService.listar().subscribe(response => this.alunos = response);
  }

  adicionar(frm: FormGroup) {
    this.alunoService.adicionar(this.aluno).subscribe(response => {
      this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
      this.listar();
    });
  }
}
