import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service'; 

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  displayedColumns: string[] = ['clienteId','nombre','apellido','direccion','email','telefono','rfc','usuario','accion'];
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.listarClientes();
  }

  get resultados(){
    return  this.clienteService.resultados;
  }
}
