import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minha Página';
  data: string = '';
  skinsDestaque: Array<any> = [];
  skins: Array<any> = [];
  skinsFiltradas: any;
  nomes: any;
  


  constructor(public json: JsonService) {
    this.json.getJson('https://fortnite-api.com/v2/shop/br/?language=pt-BR').subscribe((res: any) => {
      console.log(res);
      this.data = res.data.date;

      //buscando as imagens das skins
      this.skinsDestaque = res.data.featured.entries[0].items[0].images.smallIcon;
      this.skins = res.data.featured.entries;
      this.skins.forEach(destaque => {
        this.skinsFiltradas = destaque.items[0].images.smallIcon;
        let target = document.getElementById('target');
        let newArrSkin = document.createElement("img");
        newArrSkin.src = this.skinsFiltradas;
        target?.appendChild(newArrSkin);
//Buscando nomes
this.nomes = destaque.items[0].name;
console.log(this.nomes)


      })

    })


  }

}


