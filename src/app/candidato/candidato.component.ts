import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit{
  candidatoForm!: FormGroup;

  cadastroCriado: boolean = false;
  exibirFormulario: boolean = true;

  constructor(private fb: FormBuilder ,private http: HttpClient) { }

  ngOnInit(): void {

    this.candidatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      escolaridade: new FormControl('', Validators.required),
      funcao: new FormControl('', Validators.required),
      competencias: new FormArray([
        new FormGroup({
          descricao: new FormControl('', Validators.required),
          nivel: new FormControl('', Validators.required),
        })
      ])
    });
  }

  get competencias() {
    return this.candidatoForm.get('competencias') as FormArray;
  }

  adicionarCompetencia() {
    this.competencias.push(new FormGroup({
      descricao: new FormControl('', Validators.required),
      nivel: new FormControl('', Validators.required),
    }));
  }




  onSubmit() {
    const data = this.candidatoForm.value;
    data.competencias = this.competencias.getRawValue();
    this.http.post('http://localhost:3000/curriculos', data)
    .subscribe(response => {
      this.exibirFormulario = false;
      this.cadastroCriado = true;
  });
  }

  voltarParaFormulario() {
    this.cadastroCriado = false;
    this.exibirFormulario = true;
    this.candidatoForm.reset();
  }



}
