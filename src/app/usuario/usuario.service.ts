import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario, IDataUsuario } from './interfaces/IDataUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiUrl: string = environment.apiUrl;
  usuarioUrl: string = `${this.apiUrl}/usuario`
  resultados : Usuario[] = [];
  constructor(private http: HttpClient) { }

  listarUsuarios(){
    this.http.get<IDataUsuario>(this.usuarioUrl)
              .subscribe(resp=> {
                this.resultados = resp.resultado;
              })
  }
}