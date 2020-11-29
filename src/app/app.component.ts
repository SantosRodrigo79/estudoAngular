import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fortnite Loja de Itens';
  data: string = '';
  skins: Array<any> = [];
  skinsFiltradas: any;
  
  
  constructor(public json: JsonService) {
    this.json.getJson('https://fortnite-api.com/v2/shop/br/?language=pt-BR').subscribe((res: any) => {
      console.log(res);
      this.data = res.data.date;

      //buscando as imagens das skins
     
      this.skins = res.data.featured.entries;
      this.skins.forEach(destaque => {
        this.skinsFiltradas = destaque.items[0].images.smallIcon;
        let images = document.getElementById('Images');
        let newArrSkin = document.createElement("img");
        newArrSkin.src = this.skinsFiltradas;
        images?.appendChild(newArrSkin);
//Buscando nomes
let nomesArr = document.getElementById('nomes');
let nomesLista = document.createElement('div');
nomesLista.appendChild(document.createTextNode(destaque.items[0].name));
nomesArr?.appendChild(nomesLista);

      })

    })


  }

}


