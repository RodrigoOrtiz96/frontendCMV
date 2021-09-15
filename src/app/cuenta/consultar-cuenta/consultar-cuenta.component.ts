import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-consultar-cuenta',
  templateUrl: './consultar-cuenta.component.html',
  styleUrls: ['./consultar-cuenta.component.css']
})
export class ConsultarCuentaComponent implements OnInit {

  constructor(private service:SharedService) { }

  ListaClientes:any=[];
  ListaCuentas:any=[];

  modalTitle:string="";
  ActivarAgregarEditarClienteComp:boolean=false;
  clientes:any;

  ngOnInit(): void {
    this.refrescarListaCliente();
  }

  consultarClick(objeto:any){
    this.clientes=objeto;
    this.modalTitle="Cuentas del cliente";
    this.service.consultarCuentas(objeto.idCliente).subscribe(data=>{
      this.ListaCuentas=data;
    });
  }

  asociarClick(objeto:any){

  }

  closeClick(){
    this.ActivarAgregarEditarClienteComp=false;
    this.refrescarListaCliente();
  }

  refrescarListaCliente(){
    this.service.verClientes().subscribe(data=>{
      this.ListaClientes=data;
    });
  }

}
