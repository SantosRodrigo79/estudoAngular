import { Component } from '@angular/core';
import{ JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minha Página';
  data:string = '';
  skinsDia:Array<any>[] = [];
  constructor(public json:JsonService){
    this.json.getJson('https://fortnite-api.com/v2/shop/br/?language=pt-BR').subscribe((res : any)=>{
      console.log(res);
      this.data = res.data.date;
      this.skinsDia = res.data.featured.entries[0].items[0].images.smallIcon;
      console.log(this.skinsDia);
      

     
    })


  }

  }


