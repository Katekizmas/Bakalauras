import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { aplinka } from '../environments/environment';
import { globalus } from '../environments/globals';


interface IVartotojas {
  pastas: string;
  slaptazodis: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  }; 

  duomenys: IVartotojas = { pastas: "paunor1", slaptazodis: "testas" };
  _nuoroda = "http://localhost:6900/autentifikacija";

  constructor(private _http: HttpClient) { }
  

  prisijungti(duoemnys: any) {
    this._http.post<any>(this._nuoroda + "/prisijungti", this.duomenys, this.httpOptions)
      .subscribe((atsakymas) => {
        globalus.role = atsakymas.body.role;
        globalus.pastas = atsakymas.body.pastas;
        globalus.id = atsakymas.body.id;
        globalus.arPrisijunges = true;
        globalus.rodytiVartotoja = (atsakymas.body.role.includes('MODERATOR') || atsakymas.body.role.includes('ADMIN') || atsakymas.body.role.includes('USER'));
        globalus.rodytiModeratoriu = (atsakymas.body.role.includes('MODERATOR') || atsakymas.body.role.includes('ADMIN'));
        globalus.rodytiAdmin = atsakymas.body.role.includes('ADMIN');
      });
  }

  registruoti(vartotojas: any): Observable<any> {
    return this._http.post(aplinka.apiNuoroda + '/registruoti', vartotojas, this.httpOptions);
  }

  atsijungti(){
    return this._http.post(aplinka.apiNuoroda + '/atsijungti',{}, this.httpOptions);
  }

}