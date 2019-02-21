import { Owner } from './../../models/owner';
import { OwnerService } from './../owner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-owners-component',
  templateUrl: './list-owners-component.component.html',
  styleUrls: ['./list-owners-component.component.css']
})
export class ListOwnersComponentComponent implements OnInit {

  public owners: Array<Owner>;

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getOwners().subscribe(
      data => { this.owners = data; }
    )
  }

}
