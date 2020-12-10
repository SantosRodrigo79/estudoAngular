import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerarListasComponent } from './listas/gerar-listas/gerar-listas.component';
const routes: Routes = [
{
  path :'',
  component:GerarListasComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
