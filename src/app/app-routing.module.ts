import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CandidatoComponent } from "./candidato/candidato.component";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { TemplateAdministrativoComponent } from "./template-administrativo/template-administrativo.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'candidato', component: CandidatoComponent},
  { path: 'administrativo', component: AdminComponent},
  { path: 'consulta', component: TemplateAdministrativoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

