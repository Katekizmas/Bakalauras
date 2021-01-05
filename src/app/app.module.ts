import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrisijungimasComponent } from './autentifikacija/prisijungimas/prisijungimas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrisijungimasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
