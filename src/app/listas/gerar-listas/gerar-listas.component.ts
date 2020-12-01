import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/json.service';
import { Loja } from 'src/app/models/loja.model';

@Component({
  selector: 'app-gerar-listas',
  templateUrl: './gerar-listas.component.html',
  styleUrls: ['./gerar-listas.component.css']
})
export class GerarListasComponent implements OnInit {

  url:string = 'https://fortnite-api.com/v2/shop/br/?language=pt-BR';
  lojaDiaria: Loja[] = [];
  lojaDestaque:Loja[] = [];
  lojaSpecial:Loja[] = [];

  constructor(
  public  lojaService:JsonService
  ) { }

  ngOnInit(): void {
    this.getLoja();
  }
  getLoja(){
this.lojaService.getJson().subscribe(skins=>{
  this.lojaDiaria = skins.data.daily.entries[0].items;
  console.log(this.lojaDiaria);
  
});

this.lojaService.getJson().subscribe(skins=>{
  this.lojaDestaque = skins.data.featured.entries;
  
});

this.lojaService.getJson().subscribe(skins=>{
  this.lojaSpecial = skins.data.specialFeatured.entries;
  
});

  }

}
