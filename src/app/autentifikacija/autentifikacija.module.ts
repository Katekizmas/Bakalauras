import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentifikacijaRoutingModule } from './autentifikacija-routing.module';
import { PrisijungimasComponent } from './prisijungimas/prisijungimas.component';


@NgModule({
  declarations: [PrisijungimasComponent],
  imports: [
    CommonModule,
    AutentifikacijaRoutingModule
  ]
})
export class AutentifikacijaModule { }
