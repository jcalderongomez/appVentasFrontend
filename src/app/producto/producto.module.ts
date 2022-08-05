import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { HomeComponent } from './home/home.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductoService } from './producto.service';



@NgModule({
  declarations: [
    ListadoComponent,
    EliminarComponent,
    EditarComponent,
    AgregarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialModule
  ],
  providers:[
    ProductoService
  ]
})
export class ProductoModule { }
