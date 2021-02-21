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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TvarkarastisComponent } from './tvarkarastis/tvarkarastis.component';
import { TestinisComponent } from './testinis/testinis.component';
import { MaterialModule } from '../material.module';

//import { MatSidenav } from '@angular/material/sidenav';

@NgModule({
  declarations: [NavigacijaComponent, TvarkarastisComponent, TestinisComponent],
  imports: [
    MaterialModule,
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
