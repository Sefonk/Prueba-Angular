import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar-producto',
  templateUrl: './comprar-producto.component.html',
  styleUrls: ['./comprar-producto.component.css']
})
export class ComprarProductoComponent implements OnInit {
  Productos:any; 
  constructor(    private crudServ:CrudService,
    private ruteador:Router) { }

  ngOnInit(): void {


    this.crudServ.ObtenerProd().subscribe(respuesta=>
      {console.log(respuesta);
      this.Productos=respuesta});
  }

  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Desea Comprar el Producto?")){
    this.crudServ.BorrarProd(id).subscribe((respuesta)=>{
      this.Productos.splice(iControl,1);
      this.ruteador.navigateByUrl('/listar-producto');
    });
  }
  }


}
