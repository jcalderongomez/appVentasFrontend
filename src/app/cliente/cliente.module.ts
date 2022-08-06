import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HomeComponent } from './home/home.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MaterialModule } from '../material/material.module';
import { ClienteService } from './cliente.service';

@NgModule({
  declarations: [
    EliminarComponent,
    EditarComponent,
    AgregarComponent,
    ListadoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MaterialModule
  ],
  providers:[
    ClienteService
  ]
})
export class ClienteModule { }
