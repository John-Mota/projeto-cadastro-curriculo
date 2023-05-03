import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-consulta-cadastro',
  templateUrl: './consulta-cadastro.component.html',
  styleUrls: ['./consulta-cadastro.component.css']
})
export class ConsultaCadastroComponent {
  candidato: any = {};
  cpf!: string;
  exibirCandidato: boolean = false

  constructor(private authService: AuthService, http: HttpClient) {}

  onSubmit() {
    this.pesquisarPorCPF(this.cpf);

  }

  pesquisarPorCPF(cpf: string) {
    const cpfLimpo = this.cpf.replace(/[^\d]/g, '');

    this.authService.pesquisarPorCPF(cpfLimpo).subscribe((results) => {
      console.log('Resultado da busca', results);
      if(cpfLimpo.length > 0) {
        this.candidato = results;
        this.exibirCandidato = true
      } else {
        console.log(`Candidato com CPF ${cpf} não encontrado`)
        this.exibirCandidato = false;
      }
    })
  }
}
