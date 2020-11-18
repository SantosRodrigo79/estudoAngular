import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minha Página';
 tasks:Array<String> = [];
task:String = "";
add(){
  this.tasks.push(this.task);
  }

}
