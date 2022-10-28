import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from '../model/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  //URL = 'http://localhost:8080/curs&cert/';
  URL = 'https://backendcf.herokuapp.com/curs&cert/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Cursos[]>{
    return this.httpClient.get<Cursos[]>(this.URL + 'lista');
  }

  public details(id: number): Observable<Cursos>{
    return this.httpClient.get<Cursos>(this.URL + `detail/${id}`);
  }

  public save(curso:Cursos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', curso);
  }

  public update(id: number, curso: Cursos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, curso);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
