import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
//import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:13873/api";

  constructor(private http:HttpClient) { }

  verClientes():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Cliente');
  }

  agregarCliente(val:any){
    return this.http.post(this.APIUrl+'/Cliente',val);
  }

  editarCliente(val:any){
    return this.http.put(this.APIUrl+'/Cliente',val);
  }

  eliminarCliente(val:any){
    return this.http.delete(this.APIUrl+'/Cliente/'+val);
  }

  consultarCuentas(val:any){
    return this.http.get<any>(this.APIUrl+'/Cuentas/'+val);
  }

  asociarCuentas(val:any){
    return this.http.post(this.APIUrl+'/Cuentas',val);
  }
}
