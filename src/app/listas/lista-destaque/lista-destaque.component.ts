import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destaque',
  templateUrl: './lista-destaque.component.html',
  styleUrls: ['./lista-destaque.component.css']
})
export class ListaDestaqueComponent implements OnInit {
  @Input()destaque:Array<any>=[]

  constructor() { }

  ngOnInit(): void {
  }

}
