import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<any>(`${this.api}/alunos`);
  }

  adicionar(aluno: any): Observable<any> {
    return this.http.post<any>(`${this.api}/alunos`, aluno);
  }

  listarLinguas(): Observable<any> {
    return this.http.get<any>(`${this.api}/linguas`);
  }

  listarTurmas(): Observable<any> {
    return this.http.get<any>(`${this.api}/turmas`);
  }

  listarByCodigo(codigo: number): any {
    return this.http.get(`${this.api}/alunos/${codigo}`);
  }

  atualizar(aluno: any): Observable<any> {
    const codigo = aluno.id;
    return this.http.put(`${this.api}/alunos/${codigo}`, JSON.stringify(aluno));
  }
}
