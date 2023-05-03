import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environment';

import { AppComponent } from './app.component';
import { CandidatoComponent } from './candidato/candidato.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { TemplateAdministrativoComponent } from './template-administrativo/template-administrativo.component';
import { ConsultaCadastroComponent } from './consulta-cadastro/consulta-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatoComponent,
    AdminComponent,
    HomeComponent,
    TemplateAdministrativoComponent,
    ConsultaCadastroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: 'apiUrl', useValue: environment.apiUrl }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
