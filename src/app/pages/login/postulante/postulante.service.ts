import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PostulanteSigninRequest} from 'src/app/pages/signin/postulante/postulante-signin-interface';
import {authInterceptorProviders} from 'src/app/util/auth.interceptor'

const baseUrl = 'http://localhost:8080/api/postulante';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})


export class PostulanteService {

  constructor(private http:HttpClient) { }
  
  get(id:any): Observable<any> {
    return this.http.get(`${baseUrl}/profile/basicinfo/${id}`);
  }
  

  

}
