import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  public query: string;
  public result: string;
  public resp: string;
  @Input()
  labelButton : string;
  @Input()
  placeholder : string;
  @Output()
  searchEvent = new EventEmitter();

  constructor(private ownerList: OwnerService) { 
    this.query = "";
  }

  ngOnInit() {
    this.ownerList.getOwners().subscribe(
      resp => { resp = Array(5000)}
    )
  }

  search(){
    this.result = 'Consulta realiza con query \"' + this.query +'\"';
    this.searchEvent.emit({query: this.query, resultado: this.result});
    this.resp 
  }

}
