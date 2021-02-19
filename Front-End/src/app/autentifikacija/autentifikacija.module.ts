import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule/*, FormBuilder, FormGroup, Validators*/ } from '@angular/forms';

import { AutentifikacijaRoutingModule } from './autentifikacija-routing.module';
import { PrisijungimasComponent } from './prisijungimas/prisijungimas.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { SlaptazodisComponent } from './slaptazodis/slaptazodis.component';

@NgModule({
  declarations: [/*PrisijungimasComponent,*/ RegistracijaComponent, SlaptazodisComponent],
  imports: [
    CommonModule,
    AutentifikacijaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AutentifikacijaModule { }
