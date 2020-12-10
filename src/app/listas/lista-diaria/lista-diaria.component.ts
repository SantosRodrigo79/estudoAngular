import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-lista-diaria',
  templateUrl: './lista-diaria.component.html',
  styleUrls: ['./lista-diaria.component.css']
})
export class ListaDiariaComponent implements OnInit {
  @Input()diaria:Array<any>=[];

  constructor() { }

  ngOnInit(): void {
  }

}
