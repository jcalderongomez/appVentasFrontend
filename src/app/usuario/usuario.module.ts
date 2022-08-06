import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { MaterialModule } from '../material/material.module';
import { UsuarioService } from './usuario.service';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  declarations: [
    ListadoComponent,
    HomeComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MaterialModule
  ],
  providers:[
    UsuarioService
  ]
})
export class UsuarioModule { }
