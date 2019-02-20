import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootcamp-angular';
  public query: string;
  labelButton: string;
  placeHolder: string;
  public msgEventSearch: string;
  constructor(){
    this.labelButton= "Busque aquí ...";
    this.placeHolder= "";
  }
  search(event){
    this.msgEventSearch = event.query + ' => ' + event.resultado;
  }
}
