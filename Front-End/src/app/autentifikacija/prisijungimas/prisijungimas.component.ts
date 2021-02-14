import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // pridejau cionais
@Component({
  selector: 'app-prisijungimas',
  templateUrl: './prisijungimas.component.html',
  styleUrls: ['./prisijungimas.component.scss']
})
export class PrisijungimasComponent implements OnInit {
  laikotarpis: number = new Date().getFullYear();
  constructor(private navigacija: Router) { }

  ngOnInit(): void {
  }

  prisijungimasAutentifikacija(){
    this.navigacija.navigate(['/pagrindinis']);
  }
}
