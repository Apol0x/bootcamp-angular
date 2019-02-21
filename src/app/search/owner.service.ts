import { Router } from '@angular/router';
import { Owner } from './../models/owner';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OwnerService {
  public owners: Array<Owner>;
   
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  getOwners() {
    return this.httpClient.get<Owner[]>('http://localhost:9966/petclinic/api/owners');
  }

  getOwnersById(owner){
    return this.httpClient.get<Owner>('http://localhost:9966/petclinic/api/owners/'+owner);
  }
}
