import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{ HttpClientModule } from '@angular/common/http';
import { GerarListasComponent } from './listas/gerar-listas/gerar-listas.component';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';
import { ListaDiariaComponent } from './listas/lista-diaria/lista-diaria.component';
import { ListaDestaqueComponent } from './listas/lista-destaque/lista-destaque.component';

@NgModule({
  declarations: [
    AppComponent,
    GerarListasComponent,
    LocalDateTimePipe,
    ListaDiariaComponent,
    ListaDestaqueComponent
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
