import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria, IDataCategoria } from './interfaces/IDataCategoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl: string = environment.apiUrl;
  categoriaUrl: string = `${this.apiUrl}/categoria`
  resultados : Categoria[] = [];
  constructor(private http: HttpClient) { }

  listarCategorias(){
    this.http.get<IDataCategoria>(this.categoriaUrl)
              .subscribe(resp=> {
                this.resultados = resp.resultado;
              })
  }
}
