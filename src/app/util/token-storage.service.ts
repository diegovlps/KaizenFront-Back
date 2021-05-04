import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const JOB_KEY = 'idPuesto'

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() { }

  //Cerrar session del Local
  signOut(): void {
    window.localStorage.clear();
  }

  //Guardar session en Local
  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public saveTokenjob(token: string): void {
    window.localStorage.removeItem(JOB_KEY);
    window.localStorage.setItem(JOB_KEY, token);
  }

  public getTokenjob(): string | null {
    return window.localStorage.getItem(JOB_KEY);
  }

  //Obtenemos la session con los datos
  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  //Guarda usuario con token
  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  //Obtiene usuario con token (datos)
  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    //Convertir los datos "user" a Json
    if (user) {
      return JSON.parse(user);
    }
    return {};

  }
}
