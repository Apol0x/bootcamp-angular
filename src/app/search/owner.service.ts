import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class OwnerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getOwners() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/photos')
  }
}
