import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-administrativo',
  templateUrl: './template-administrativo.component.html',
  styleUrls: ['./template-administrativo.component.css']
})
export class TemplateAdministrativoComponent {

  cadastros!: any[];

  constructor(private http: HttpClient) {};

  ngOnInit(): void {
    this.getCadastros();
  }

  getCadastros() {
    this.http.get<any[]>('http://localhost:3000/curriculos').subscribe(
      data => {
        this.cadastros = data;
      },
      error => {
        console.log('Erro ao obter os cadastros: ' + error.message);
      }
    );
  }

}
