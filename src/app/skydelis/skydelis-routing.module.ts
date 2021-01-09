import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { TestinisKomponentasComponent } from './testinis-komponentas/testinis-komponentas.component';
import { TestinisKomponentas2Component } from './testinis-komponentas2/testinis-komponentas2.component';
import { TestinisKomponentas3Component } from './testinis-komponentas3/testinis-komponentas3.component';
//import { NavigacijaComponent } from './navigacija/navigacija.component';

const routes: Routes = [
  //{path: 'pagrindinis', component: NavigacijaComponent},
  {path: '', component: NavigacijaComponent,
    children: [
    {path: 'testiniskomponentas1', component: TestinisKomponentasComponent},
    {path: 'testiniskomponentas2', component: TestinisKomponentas2Component},
    {path: 'testiniskomponentas3', component: TestinisKomponentas3Component},
  ]
  }  ,
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkydelisRoutingModule { }
