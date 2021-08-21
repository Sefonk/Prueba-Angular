import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
 elID:any;
 formularioProd:FormGroup;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario: FormBuilder,
    private ruteador :Router
  ) { 
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.obtProd(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioProd.setValue({
          NomProd:respuesta[0]['NomProd'],
          CanProd:respuesta[0]['CanProd'],
          LotProd:respuesta[0]['LotProd'],
          FVenPro:respuesta[0]['FVenPro'],
          PreProd:respuesta[0]['PreProd']  
        })
      }
    );

    this.formularioProd=this.formulario.group(
      {
        NomProd:[''],
        CanProd:[''],
        LotProd:[''],
        FVenPro:[''],
        PreProd:['']
      }
    )
  }
  ngOnInit(): void {
  }

  EnvDatos():any{
    console.log(this.elID);
    console.log(this.formularioProd.value);
    this.crudService.EditarProducto(this.elID, this.formularioProd.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-producto');
    });
  }



}
