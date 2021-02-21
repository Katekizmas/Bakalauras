import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { TvarkarastisComponent } from './tvarkarastis/tvarkarastis.component';
import { TestinisComponent } from './testinis/testinis.component';
//import { NavigacijaComponent } from './navigacija/navigacija.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  //{path: 'pagrindinis', component: NavigacijaComponent},
  {
    path: '', component: NavigacijaComponent,
    children: 
  [
    {path: 'tvarkarastis', component: TvarkarastisComponent, canActivate : [AuthGuard]},
    {path: 'testinis', component: TestinisComponent},
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkydelisRoutingModule { }
