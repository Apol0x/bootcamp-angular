import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public query: string;
  public result: string;
  @Input()
  labelButton : string;
  @Input()
  placeholder : string;

  constructor() { 
    this.query = "";
  }

  ngOnInit() {
  }

  search(){
    this.result = 'Consulta realiza con query \"' + this.query +'\"';
  }

}
