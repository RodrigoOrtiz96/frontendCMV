import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-agregar-editar-clientes',
  templateUrl: './agregar-editar-clientes.component.html',
  styleUrls: ['./agregar-editar-clientes.component.css']
})
export class AgregarEditarClientesComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() clientes:any;
  idCliente:string="";
  nombre:string="";
  apellidoPaterno:string="";
  apellidoMaterno:string="";
  rfc:string="";
  curp:string="";
  fecha:string="";

  ngOnInit(): void {
    this.idCliente=this.clientes.idCliente;
    this.nombre=this.clientes.nombre;
    this.apellidoPaterno=this.clientes.apellidoPaterno;
    this.apellidoMaterno=this.clientes.apellidoMaterno;
    this.rfc=this.clientes.rfc;
    this.curp=this.clientes.curp;
  }

  agregarCliente(){
    var val = {nombre:this.nombre,
               apellidoPaterno:this.apellidoPaterno,
               apellidoMaterno:this.apellidoMaterno,
               rfc:this.rfc,
               curp:this.curp,
               fecha:this.fecha
               };
    this.service.agregarCliente(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  actualizarCliente(){
    var val = {idCliente:this.idCliente,
               nombre:this.nombre,
               apellidoPaterno:this.apellidoPaterno,
               apellidoMaterno:this.apellidoMaterno,
               rfc:this.rfc,
               curp:this.curp};
      this.service.editarCliente(val).subscribe(res=>{
      alert(res.toString());
      });
  }

}
