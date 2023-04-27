import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environment';

import { AppComponent } from './app.component';
import { CandidatoComponent } from './candidato/candidato.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { ConsultaCadastroComponent } from './candidato/consulta-cadastro/consulta-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatoComponent,
    AdminComponent,
    HomeComponent,
    LoginAdminComponent,
    ConsultaCadastroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: 'apiUrl', useValue: environment.apiUrl }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
