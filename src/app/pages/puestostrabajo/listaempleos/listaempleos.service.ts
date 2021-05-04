import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/home/show/all';

@Injectable({
  providedIn: 'root'
})
export class ListaempleosService {

  constructor(private http:HttpClient) { }

  getLista(): Observable<any> {
    return this.http.get('http://localhost:8080/api/home/show/all');
  }

}
