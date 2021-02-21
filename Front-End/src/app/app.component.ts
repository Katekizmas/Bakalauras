import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // pridejau cionais
import { globalus } from './apsauga/environments/globals';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  }; 

  _nuoroda = "http://localhost:6900/autentifikacija";

  constructor(private _http: HttpClient,
              private navigacija: Router) { }

  ngOnInit(): void {
    this.uzkrauti();
  }

  uzkrauti(){
    this._http.get<any>(this._nuoroda + "/refresh", this.httpOptions)
      .subscribe((atsakymas) => {
        if(atsakymas.klaida == 200){
          globalus.role = atsakymas.role;
          globalus.pastas = atsakymas.pastas;
          globalus.id = atsakymas.id;
          globalus.arPrisijunges = true;
          globalus.rodytiVartotoja = (atsakymas.role.includes('MODERATOR') || atsakymas.role.includes('ADMIN') || atsakymas.role.includes('USER'));
          globalus.rodytiModeratoriu = (atsakymas.role.includes('MODERATOR') || atsakymas.role.includes('ADMIN'));
          globalus.rodytiAdmin = atsakymas.role.includes('ADMIN');
          this.navigacija.navigate(['/pagrindinis']);
        } else {
          this.navigacija.navigate(['/']);
        }
      });
  }
}