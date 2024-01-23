import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }

  getHomes$() {
    // @todo add a real HTTP call to get getHomes
    return this.httpClient.get<any>('assets/homes.json');
  }
}
