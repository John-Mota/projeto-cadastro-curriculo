import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit{
  candidato

  constructor(private fb: FormBuilder ,private http: HttpClient) { }

ngOnInit(): void {

}


    this.http.post('http://localhost:3000/curriculum', data).subscribe(response => {
      console.log(response);
    });


}
