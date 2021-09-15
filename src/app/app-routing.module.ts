import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { CuentaComponent } from './cuenta/cuenta.component';

const routes: Routes = [
  {path:'Cliente',component:ClienteComponent},
  {path:'Cuentas',component:CuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
