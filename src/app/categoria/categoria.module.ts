import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HomeComponent } from './home/home.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { MaterialModule } from '../material/material.module';
import { CategoriaService } from './categoria.service';



@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    MaterialModule
  ],
  providers:[
    CategoriaService
  ]
})
export class CategoriaModule { }
