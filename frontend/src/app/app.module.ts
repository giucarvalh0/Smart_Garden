import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RetiradaComponent } from './retirada/retirada.component';
import { DisponibilizacaoComponent } from './disponibilizacao/disponibilizacao.component';
import { DashboardClienteComponent } from './dashboard-cliente/dashboard-cliente.component';
import { DashboardCuidadorComponent } from './dashboard-cuidador/dashboard-cuidador.component';
import { GraficosComponent } from './graficos/graficos.component';
import { LogComponent } from './log/log.component';
import { GoogleChartsModule } from 'angular-google-charts'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    RetiradaComponent,
    DisponibilizacaoComponent,
    DashboardClienteComponent,
    DashboardCuidadorComponent,
    GraficosComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    GoogleChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
