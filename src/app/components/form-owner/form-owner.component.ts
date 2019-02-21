import { OwnerService } from 'src/app/search/owner.service';
import { Owner } from './../../models/owner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {
  owner: Owner;
  ownerService: OwnerService;
  constructor() { this.owner = <Owner>{};
  }

  ngOnInit() {

  }
  //TODO: TERMINAR AÑADIR OWNER, DE MOMENTO DA ERROR

  onSubmit(owner: Owner){
    owner.id = null;
    this.ownerSevice.addOwner(owner).subscribe(
      new_owner => {
        this.owner = new_owner;
        this.ngOnInit.gotoOwnersList();
      },
      error => this.errorMessage = <any>error
    );
  }

}
