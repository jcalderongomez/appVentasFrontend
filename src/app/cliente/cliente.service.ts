import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente, IDataCliente } from './interfaces/IDataCliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiUrl: string = environment.apiUrl;
  clienteUrl: string = `${this.apiUrl}/cliente`
  resultados : Cliente[] = [];
  constructor(private http: HttpClient) { }

  listarClientes(){
    this.http.get<IDataCliente>(this.clienteUrl)
              .subscribe(resp=> {
                this.resultados = resp.resultado;
              })
  }
}
