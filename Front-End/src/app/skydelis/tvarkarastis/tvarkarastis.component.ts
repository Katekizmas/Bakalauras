import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { globalus } from '../../apsauga/environments/globals';

export interface ITvarkarastis {
  id: string;
  laikas: string;
  aprasymas: string;
  vartotojas_fkey: string;
}

@Component({
  selector: 'app-tvarkarastis',
  templateUrl: './tvarkarastis.component.html',
  styleUrls: ['./tvarkarastis.component.scss']
})
export class TvarkarastisComponent implements OnInit {
  _nuoroda = "http://localhost:6900/tvarkarastis";
  tvarkarastis: ITvarkarastis[];



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true, 
    //observe: 'response' as 'response'
    observe: "body"
  }; 

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.gautiTvarkarascius();
  }

  async gautiTvarkarascius()/*: Observable<ITvarkarastis[]>*/{
    const duomenys = await this._http.get<any>(this._nuoroda + "/", { withCredentials: true }).subscribe({
      next: duomenys => {
        this.tvarkarastis = duomenys.tvarkarastis;
      },
      error: klaidos => {
        console.log("Įvyko klaida gaunant tvarkaraščius", klaidos);
      }
    })
  }
  autentifikacija(){
    globalus.arPrisijunges = false;
    /*this._http.get<any>("http://localhost:6900/autentifikacija/", {withCredentials: true})
      .subscribe((atsakymas) => {
      });*/
  }
}
