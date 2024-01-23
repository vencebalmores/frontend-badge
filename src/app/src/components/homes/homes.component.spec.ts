import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomesComponent } from './homes.component';
import {DataService} from '../../services/data.service';
import {DialogService} from '../../services/dialog.service';
import {spyOnClass} from 'jasmine-es6-spies';
import { of } from 'rxjs';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogService: jasmine.SpyObj<DialogService>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [HomesComponent],
        providers: [
          {provide: DataService, useFactory: () => spyOnClass(DataService)},
          {provide: DialogService, useFactory: () => spyOnClass(DialogService)}
        ]
      })
      .compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    dataService = TestBed.get(DataService);
    dialogService = TestBed.get(DialogService);

    dataService.getHomes$.and.returnValue(of(
      [
        {
          "title": "Home 1",
          "image": "assets/listing.jpg",
          "location": "Manila"
        },
        {
          "title": "Home 2",
          "image": "assets/listing.jpg",
          "location": "Quezon City"
        },
        {
          "title": "Home 3",
          "image": "assets/listing.jpg",
          "location": "Makati"
        }
      ]
    ));

    fixture.detectChanges();
  });

  it('should show home', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);
  });

  it('should show homes', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(home.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
    expect(home.querySelector('[data-test="location"]').innerText).toEqual('Manila');
    expect(home.querySelector('[data-test="image"]')).toBeTruthy();
  });

  it('should show Book button', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(home.querySelector('[data-test="book-btn"]')).toBeTruthy();
  });

  it('should use dialog service to open a dialog when clicking on Book button', () => {
    const bookBtn = fixture.nativeElement.querySelector('[data-test="home"] button');
    bookBtn.click();
    expect(dialogService.open).toHaveBeenCalled();
  });
});
