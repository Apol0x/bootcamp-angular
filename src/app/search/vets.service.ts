import { Router } from '@angular/router';
import { Vets } from './../models/vets';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VetsService {
  public vets: Array<Vets>;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  getVets() {
    return this.httpClient.get<Vets[]>('http://localhost:9966/petclinic/api/vets');
  }
}
