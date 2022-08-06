import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HomeComponent } from './home/home.component';
import { EditarComponent } from './editar/editar.component';
import { VentaRoutingModule } from './venta-routing.module';
import { MaterialModule } from '../material/material.module';
import { VentaService } from './venta.service';



@NgModule({
  declarations: [
    ListadoComponent,
    EliminarComponent,
    EditarComponent,
    AgregarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule,
    MaterialModule
  ],
  providers:[
    VentaService
  ]
})
export class VentaModule { }
