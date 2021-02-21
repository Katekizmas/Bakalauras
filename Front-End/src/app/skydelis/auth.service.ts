import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private klaida: Variable;
  private role: string;
  constructor(private _http: HttpClient) { this.autentifikacija() }

  autentifikacija(){
    this._http.get<any>("http://localhost:6900/autentifikacija/", { withCredentials: true })
      .subscribe((atsakymas) => {
        this.klaida = atsakymas.klaida;
        this.role = atsakymas.role;
      });
  }
  get gautiRole(){
    return this.role;
  }
  get gautiKlaida(){
    return this.klaida;
  }
}

