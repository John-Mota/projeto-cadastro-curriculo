import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-template-administrativo',
  templateUrl: './template-administrativo.component.html',
  styleUrls: ['./template-administrativo.component.css']
})
export class TemplateAdministrativoComponent implements OnInit {

  cadastros!: any[];

  constructor(private authService: AuthService
  ) {};

  ngOnInit(): void {

    this.authService.getCadastros().subscribe(
      data => {
        this.cadastros = data;
      },
      error => {
        console.log('Erro ao obter os cadastros: ' + error.message);
      }
    )
  }

  setAprovacao(candidato: any, aprovacao: string) {
    candidato.aprovacao = aprovacao;
    this.authService.updateAprovacao(candidato.id, aprovacao).subscribe();
  }





}
