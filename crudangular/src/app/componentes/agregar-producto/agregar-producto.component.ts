import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  formularioProd:FormGroup;
  
  constructor(
    public formulario: FormBuilder, 
    private crudServ:CrudService,
    private ruteador:Router) {

    this.formularioProd=this.formulario.group({
      NomProd:[''],
      CanProd:[''],
      LotProd:[''],
      FVenPro:[''],
      PreProd:['']
    });
    
   }

  ngOnInit(): void {
  }
 
  enviarDatos():any{
    console.log("Me Presionaste");
    console.log(this.formularioProd.value);
    this.crudServ.AgregarProd(this.formularioProd.value).subscribe(respuesta=>{
      this.ruteador.navigateByUrl('/listar-producto');
    });


   
  }

}
