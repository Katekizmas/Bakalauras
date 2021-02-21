import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // pridejau cionais
import { globalus } from '../../apsauga/environments/globals';

interface IVartotojas {
  pastas: string;
  slaptazodis: string;
}

@Component({
  selector: 'app-prisijungimas',
  templateUrl: './prisijungimas.component.html',
  styleUrls: ['./prisijungimas.component.scss']
})
export class PrisijungimasComponent implements OnInit {

  _nuoroda = "http://localhost:6900/autentifikacija";
  laikotarpis: number = new Date().getFullYear();
  prisijungimoForma: FormGroup;
  dummydata: IVartotojas = { pastas: "paunor1", slaptazodis: "testas" };


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true, 
    observe: 'response' as 'response'
  }; 



  constructor(private _http: HttpClient,
              private navigacija: Router,
              private fb: FormBuilder) {
                this.prisijungimoForma = this.fb.group({
                  slapyvardis: ['', Validators.required],
                  slaptazodis: ['', Validators.required]
                });
               }

  ngOnInit(): void {
  }

  prisijungimasAutentifikacija(){
    //const duomenys = this.prisijungimoForma.value;

    this.prisijungti();
    this.navigacija.navigate(['/pagrindinis']);
  }
  prisijungimasRegistracija(){
    this.navigacija.navigate(['/registracija']);
  }
  prisijungimasSlaptazodis(){
    this.navigacija.navigate(['/slaptazodis']);
  }

  prisijungti() {
    this._http.post<any>(this._nuoroda + "/prisijungti", this.dummydata, this.httpOptions)
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

}
