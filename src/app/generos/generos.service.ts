import { inject, Injectable } from '@angular/core';
import { GeneroDTO } from './generos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private http = inject(HttpClient);

  constructor() { }

  public obtenerTodos(): Observable<GeneroDTO[]>{
    return this.http.get<GeneroDTO[]>("http://localhost:5031/api/generos");
    
  }
}
