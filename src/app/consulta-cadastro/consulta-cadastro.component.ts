import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-consulta-cadastro',
  templateUrl: './consulta-cadastro.component.html',
  styleUrls: ['./consulta-cadastro.component.css']
})
export class ConsultaCadastroComponent {
  candidato: any;
  cpf!: string;
  exibirCandidato: boolean = false

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.findCandidato(this.cpf).subscribe(
      (candidato) => {
        this.candidato = candidato;
        this.exibirCandidato = true
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
