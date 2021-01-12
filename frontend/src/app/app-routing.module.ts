import { LoginComponent } from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component' ;
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: LoginComponent
},
{
  path:"cadastro",
  component: CadastroComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
