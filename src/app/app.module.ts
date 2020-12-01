import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{ HttpClientModule } from '@angular/common/http';
import { GerarListasComponent } from './listas/gerar-listas/gerar-listas.component';

@NgModule({
  declarations: [
    AppComponent,
    GerarListasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
