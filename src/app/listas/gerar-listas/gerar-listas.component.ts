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
  todasLojas:Loja[] = [];
  data:any;
  constructor(
  public  lojaService:JsonService
  ) { }

  ngOnInit(): void {
    this.getLoja();
  }
  getLoja(){
this.lojaService.getJson().subscribe(skins=>{
  this.todasLojas = skins.data;
  if(skins.data.daily != null){
    this.lojaDiaria = skins.data.daily.entries;
    console.log(this.todasLojas)
  }
  
});

this.lojaService.getJson().subscribe(skins=>{
  if(skins.data.featured !=null){
  this.lojaDestaque = skins.data.featured.entries;
  this.data = skins.data.date;
  console.log(this.lojaDiaria)
  }
});

this.lojaService.getJson().subscribe(skins=>{
  if(skins.data.specialFeatured !=null){
  this.lojaSpecial = skins.data.specialFeatured.entries;
  }
  
});

  }

}
