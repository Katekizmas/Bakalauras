import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrisijungimasComponent } from './autentifikacija/prisijungimas/prisijungimas.component';
//import { ValdymoJuostaComponent } from './valdymo-juosta/valdymo-juosta.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NerastasPuslapisComponent } from './nerastas-puslapis/nerastas-puslapis.component';


@NgModule({
  declarations: [
    AppComponent,
    PrisijungimasComponent, 
    //ValdymoJuostaComponent,
    NerastasPuslapisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [/*{provide: LocationStrategy, useClass: PathLocationStrategy}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
