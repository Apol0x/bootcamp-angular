import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootcamp-angular';
  public query: string;
  paco: string;
  CECE: string;
  constructor(){
    this.paco= "Busque aquí ...";
    this.CECE= "";
  }
}
