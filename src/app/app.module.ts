import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{ HttpClientModule } from '@angular/common/http';
import { GerarListasComponent } from './listas/gerar-listas/gerar-listas.component';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GerarListasComponent,
    LocalDateTimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    LocalDateTimePipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
