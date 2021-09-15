import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VerClientesComponent } from './cliente/ver-clientes/ver-clientes.component';
import { AgregarEditarClientesComponent } from './cliente/agregar-editar-clientes/agregar-editar-clientes.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ConsultarCuentaComponent } from './cuenta/consultar-cuenta/consultar-cuenta.component';
import { AsociarCuentaComponent } from './cuenta/asociar-cuenta/asociar-cuenta.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    VerClientesComponent,
    AgregarEditarClientesComponent,
    CuentaComponent,
    ConsultarCuentaComponent,
    AsociarCuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
