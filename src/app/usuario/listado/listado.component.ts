import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service'; 

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  displayedColumns: string[] = ['usuarioId','nombre','apellido','email','password','fechaCaptura','accion'];
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.listarUsuarios();
  }

  get resultados(){
    return  this.usuarioService.resultados;
  }

}
