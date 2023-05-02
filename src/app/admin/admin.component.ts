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

  constructor(private router: Router) {}

  onSubmit(){
    if(this.username === 'diamond@diamond' && this.password === 'diamond') {
      this.router.navigate(['/consulta']);
    }
  }

}
