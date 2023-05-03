import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username!: string
  password!: string
  curriculos: any;

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit(){
    console.log('Clicou no botão Entrar');
    console.log('username: ' + this.username + ', password: ' + this.password);
    if(this.username === 'john@mota.com.br' && this.password === '123456') {
      console.log('Login realizado com sucesso!');
          this.router.navigate(['/consulta']);
        } else {
          console.log('Usuário e/ou senha inválidos!');
        };
    }
}
