import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {

  constructor(private service:SharedService) { }

  ListaClientes:any=[];

  modalTitle:string="";
  ActivarAgregarEditarClienteComp:boolean=false;
  clientes:any;

  ngOnInit(): void {
    this.refrescarListaCliente();
  }

  addClick(){
    this.clientes={
      idCliente:0,
      nombre:""
    }
    this.modalTitle="Agregar cliente";
    this.ActivarAgregarEditarClienteComp=true;
  }

  editClick(objeto:any){
    this.clientes=objeto;
    this.modalTitle="Editar cliente";
    this.ActivarAgregarEditarClienteComp=true;
  }

  elminarClick(objeto:any){
    if(confirm('¿Estás seguro?')){
      this.service.eliminarCliente(objeto.idCliente).subscribe(data=>{
        alert(data.toString());
        this.refrescarListaCliente();
      })
    }
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
