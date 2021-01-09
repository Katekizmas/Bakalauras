import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkydelisRoutingModule } from './skydelis-routing.module';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TestinisKomponentasComponent } from './testinis-komponentas/testinis-komponentas.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TestinisKomponentas2Component } from './testinis-komponentas2/testinis-komponentas2.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TestinisKomponentas3Component } from './testinis-komponentas3/testinis-komponentas3.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [NavigacijaComponent, TestinisKomponentasComponent, TestinisKomponentas2Component, TestinisKomponentas3Component],
  imports: [
    CommonModule,
    SkydelisRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class SkydelisModule { }
