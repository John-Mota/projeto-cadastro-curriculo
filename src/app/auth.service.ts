import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

  getCadastros(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/curriculos');
  }

  updateAprovacao(id: number, aprovacao: string): Observable<any> {
    return this.http.put(`http://localhost:3000/curriculos/${id}/aprovacao`, { aprovacao });
  }

  pesquisarPorCPF() {
    this.http.pesquisarPorCPF(this.cpf).subscribe((resultado) => {
      if (resultado.length > 0) {
        // Usuário encontrado, faça o que desejar aqui.
      } else {
        // Usuário não encontrado, faça o que desejar aqui.
      }
    });
  }


}
