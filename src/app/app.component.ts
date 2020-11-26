import { Component } from '@angular/core';
import{ JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minha Página';

  constructor(public json:JsonService){
    this.json.getJson('https://fortnite-api.com/v2/shop/br/?language=pt-BR').subscribe((res : any)=>{
      console.log(res);
    })


  }

  }


