import { Owner } from './../../models/owner';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from 'src/app/search/owner.service';

@Component({
  selector: 'app-detail-owner',
  templateUrl: './detail-owner.component.html',
  styleUrls: ['./detail-owner.component.css']
})
export class DetailOwnerComponent implements OnInit {
  errorMessage: string;
  owner: Owner;
  constructor(private route: ActivatedRoute, private router: Router, private ownerService: OwnerService) { 
    this.owner = <Owner>{};
  }

  ngOnInit() {
    const ownerId = this.route.snapshot.params['id'];
    this.ownerService.getOwnersById(ownerId).subscribe(
      owner => this.owner = owner,
      error => this.errorMessage = <any> error
    );
  }

}
