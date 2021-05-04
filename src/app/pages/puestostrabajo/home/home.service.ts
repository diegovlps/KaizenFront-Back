import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/home/show/puestostrabajo/all';
const urlPart = 'http://localhost:8080/api/home/show/puestostrabajo/by/parttime';
const urlFull = 'http://localhost:8080/api/home/show/puestostrabajo/by/fulltime';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getListaparams(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getListaparamspart(): Observable<any> {
    return this.http.get(urlPart);
  }

  getListaparamsfull(): Observable<any> {
    return this.http.get(urlFull);
  }

}
