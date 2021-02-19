import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // pridejau cionais
@Component({
  selector: 'app-prisijungimas',
  templateUrl: './prisijungimas.component.html',
  styleUrls: ['./prisijungimas.component.scss']
})
export class PrisijungimasComponent implements OnInit {
  laikotarpis: number = new Date().getFullYear();
  prisijungimoForma: FormGroup;

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
    const duomenys = this.prisijungimoForma.value;
    //this.navigacija.navigate(['/pagrindinis']);
  }
  prisijungimasRegistracija(){
    this.navigacija.navigate(['/registracija']);
  }
  prisijungimasSlaptazodis(){
    this.navigacija.navigate(['/slaptazodis']);
  }
}
