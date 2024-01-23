import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { DataService } from './data.service';
import {HttpClient} from '@angular/common/http';

describe('DataService', () => {
  let httpClient: HttpClient;
  let dataService: DataService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    httpClient = TestBed.get(HttpClient);
    const homesMock = [
      {
       title: 'Home 1',
       image: 'assets/listing.jpg',
       location: 'Manila'
     },
     {
       title: 'Home 2',
       image: 'assets/listing.jpg',
       location: 'Quezon City'
     },
     {
       title: 'Home 3',
       image: 'assets/listing.jpg',
       location: 'Makati'
     }
    ]

    spyOn(httpClient, 'get').and.returnValue(of(homesMock));

    dataService = TestBed.get(DataService);
    const spy = jasmine.createSpy('spy');
    dataService.getHomes$().subscribe(spy);

    //service returned mocked data
    expect(spy).toHaveBeenCalledWith(homesMock);

    //service called the proper HTTP endpoint
    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');
  });
});
