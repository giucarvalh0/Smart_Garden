import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardClienteComponent } from './dashboard-cliente/dashboard-cliente.component';
import { DashboardCuidadorComponent } from './dashboard-cuidador/dashboard-cuidador.component';
import { RetiradaComponent } from './retirada/retirada.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisponibilizacaoComponent } from './disponibilizacao/disponibilizacao.component';

const routes: Routes = [{
  path: "",
  component: LoginComponent
},
{
  path:"cadastro",
  component: CadastroComponent
},
{
  path:"dashboard-cliente",
  component: DashboardClienteComponent
},
{
  path:"dashboard-cuidador",
  component: DashboardCuidadorComponent
},
{
  path: "solicitar-produtos",
  component: RetiradaComponent
},
{
  path: "disponibilizar-produtos",
  component: DisponibilizacaoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
