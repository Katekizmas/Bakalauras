import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { aplinka } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
}; 

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(private _http: HttpClient) { }
}
