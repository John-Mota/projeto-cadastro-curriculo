import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

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

  pesquisarPorCPF(cpf: string): Observable<any> {
    return this.http.get(`http://localhost:3000/curriculos?cpf=${cpf}`).pipe(
      map((response: any) => {
        if (response.length > 0) {
          return response[0];
        } else {
          return null;
        }
      }),
      catchError((error) => {
        console.log('Error:', error);
        return of(null);
      })
    );
  }


}

