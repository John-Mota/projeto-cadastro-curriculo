import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CandidatoComponent } from "./candidato/candidato.component";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { LoginAdminComponent } from "./admin/login-admin/login-admin.component";
import { ConsultaCadastroComponent } from "./candidato/consulta-cadastro/consulta-cadastro.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'candidato', component: CandidatoComponent},
  { path: 'administrativo', component: AdminComponent},
  { path: 'login-admin', component: LoginAdminComponent},
  { path: 'consulta', component: ConsultaCadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

