import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { ComprarProductoComponent } from './componentes/comprar-producto/comprar-producto.component';

const routes: Routes = [

  {path: '',pathMatch:'full', redirectTo: 'agregar-producto'},
  {path: 'agregar-producto',component:AgregarProductoComponent},
  {path: 'editar-producto/:id',component:EditarProductoComponent},
  {path: 'listar-producto',component:ListarProductoComponent},
  {path: 'comprar-producto', component:ComprarProductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
