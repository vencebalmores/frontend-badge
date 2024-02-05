import { Injectable } from '@angular/core';
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

  bookHome$() {
    return this.httpClient.post('https://run.mocky.io/v3/9cfbcce0-fc98-4c38-a929-6500e57c33a8', {});
  }
}
