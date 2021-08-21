import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import { Producto } from './Producto';
import { AgregarProductoComponent } from '../componentes/agregar-producto/agregar-producto.component';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string ='http://localhost/inventario_pru/';
  constructor(private clienteHttp:HttpClient) { }
    
    AgregarProd(datosProducto:Producto):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosProducto);

    }

    BorrarProd(id:any):Observable<any>{
      return this.clienteHttp.get(this.API+"?borrar="+id);  
      }

    obtProd(id:any):Observable<any>{
        return this.clienteHttp.get(this.API+"?consultar="+id);  
        }
  

    ObtenerProd(){
    return this.clienteHttp.get(this.API);

    }

    EditarProducto(id:any, datos:any):Observable<any>{
      return this.clienteHttp.post(this.API+'?actualizar='+id , datos);
    }
  
}
