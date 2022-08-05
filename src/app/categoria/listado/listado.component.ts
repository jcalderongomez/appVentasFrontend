import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  displayedColumns: string[] = ['categoriaId','nombreCategoria','fechaCaptura'];
  
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias();
  }

  get resultados(){
    return  this.categoriaService.resultados;
  }
}
