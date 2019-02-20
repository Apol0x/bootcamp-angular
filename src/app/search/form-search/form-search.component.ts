import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  public query: string;
  public result: string;
  @Input()
  labelButton : string;
  @Input()
  placeholder : string;
  @Output()
  searchEvent = new EventEmitter();

  constructor() { 
    this.query = "";
  }

  ngOnInit() {
  }

  search(){
    this.result = 'Consulta realiza con query \"' + this.query +'\"';
    this.searchEvent.emit({query: this.query, resultado: this.result});
  }

}
