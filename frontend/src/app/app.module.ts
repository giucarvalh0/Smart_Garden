import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RetiradaComponent } from './retirada/retirada.component';
import { DisponibilizacaoComponent } from './disponibilizacao/disponibilizacao.component';
import { DashboardClienteComponent } from './dashboard-cliente/dashboard-cliente.component';
import { DashboardCuidadorComponent } from './dashboard-cuidador/dashboard-cuidador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    RetiradaComponent,
    DisponibilizacaoComponent,
    DashboardClienteComponent,
    DashboardCuidadorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
