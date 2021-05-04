import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/postulante';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class PostulacionService {

  constructor(private http:HttpClient) { }

  Publicar(id:any,idpuesto:any): Observable<any> {

    var puestotrabajo: FormData = new FormData();

    puestotrabajo.append('idpuestotrabajo', idpuesto);

    return this.http.post(
      baseUrl+`/${id}/postular/puestotrabajo`,
      puestotrabajo
    );
}

}
