import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ValdymoJuostaComponent } from './valdymo-juosta/valdymo-juosta.component';
//import { PrisijungimasComponent } from './autentifikacija/prisijungimas/prisijungimas.component'; 
import { NerastasPuslapisComponent } from './nerastas-puslapis/nerastas-puslapis.component';
import { PatvirtinimasGuard } from './patvirtinimas.guard';
//import { AuthGuard } from './apsauga/guards/auth.guard';

const routes: Routes = [
  /*{path: '', component: PrisijungimasComponent},
  {path: '**', component: ValdymoJuostaComponent}, // kai betkoks ivestas
  {path: 'pagrindinis', component: ValdymoJuostaComponent},*/
  {
    path: 'pagrindinis',
    //loadChildren: 'src/app/skydelis/skydelis.module.ts#SkydelisModule'
    canActivate: [PatvirtinimasGuard], // jqs token autentifikacija logika poto
    loadChildren: () => import('./skydelis/skydelis.module').then(m => m.SkydelisModule)
  },
  {
    path: '',
    //loadChildren: 'src/app/autentifikacija/autentifikacija.module#AutentifikacijaModule'
    loadChildren: () => import('./autentifikacija/autentifikacija.module').then(m => m.AutentifikacijaModule)
  },
  {
    path: '**',
    component: NerastasPuslapisComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
