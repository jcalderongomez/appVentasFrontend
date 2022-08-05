import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto, IDataProducto } from '../producto/interfaces/IDataProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  apiUrl: string = environment.apiUrl;
  productoUrl: string = `${this.apiUrl}/producto`
  resultados : Producto[] = [];
  constructor(private http: HttpClient) { }

  listarProducto(){
    this.http.get<IDataProducto>(this.productoUrl)
              .subscribe(resp=> {
                this.resultados = resp.resultado;
              })
  }
}
