import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component' ;
import { RetiradaComponent } from './retirada/retirada.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisponibilizacaoComponent } from './disponibilizacao/disponibilizacao.component'

const routes: Routes = [{
  path: "",
  component: LoginComponent
},
{
  path:"cadastro",
  component: CadastroComponent
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
