import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NerastasPuslapisComponent } from '../nerastas-puslapis/nerastas-puslapis.component';
import { NavigacijaComponent } from '../skydelis/navigacija/navigacija.component';
import { PrisijungimasComponent } from './prisijungimas/prisijungimas.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { SlaptazodisComponent } from './slaptazodis/slaptazodis.component';

const routes: Routes = [
  {path: '', component: PrisijungimasComponent},
  //{path: '**', component: NerastasPuslapisComponent },
  
  //{ path: 'prisijungimas', component: PrisijungimasComponent},
  {path: 'prisijungimas', component: PrisijungimasComponent},
  {path: 'registracija', component: RegistracijaComponent},
  {path: 'slaptazodis', component: SlaptazodisComponent}, 
  //{path: 'pagrindinis', component: NavigacijaComponent}, // ar geriau i kita nukelt?
  {path: '**', redirectTo: '/prisijungimas'/*, pathMatch: 'full' */},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentifikacijaRoutingModule { }
