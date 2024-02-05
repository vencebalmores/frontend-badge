import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookComponent } from './book.component';
import { DataService } from '../../services/data.service';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData: any;
  let notificationService: jasmine.SpyObj<MatSnackBar>;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogService: jasmine.SpyObj<MatDialogRef<BookComponent>>;
  let dialogSpy: jasmine.Spy;
  let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: of({}) });
  dialogRefSpyObj.componentInstance = { body: '' };

  const getElement = (selector: any) => fixture.nativeElement.querySelector(selector);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [BookComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
      { provide: MatDialogRef, useFactory: () => spyOnClass(MatDialogRef) },
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: DataService, useFactory: () => spyOnClass(DataService)},
      { provide: MatSnackBar, useFactory: () => spyOnClass(MatSnackBar)}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
    dialogData = TestBed.get(MAT_DIALOG_DATA);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
    dialogService = TestBed.get(MatDialogRef);
    notificationService = TestBed.get(MatSnackBar);

    const homes = [
      {
        "title": "Home 1",
        "image": "assets/listing.jpg",
        "location": "Manila",
        "price": "$125"
      }
    ];
    dialogData.home = homes[0];

    fixture.detectChanges();
  });

  it('should show title', () => {
    expect(getElement('[data-test="title"]').textContent).toContain('Book Home 1');
  });

  it('should show price', () => {
    expect(getElement('[data-test="price"]').textContent).toContain('$125 per night');
  });

  it('should show check in date field', () => {
    expect(getElement('[data-test="check-in"]')).toBeTruthy();
  });

  it('should show check out date field', () => {
    expect(getElement('[data-test="check-out"]')).toBeTruthy();
  });

  it('should show total', () => {
    const checkIn = getElement('[data-test="check-in"] input');
    checkIn.value = '12/20/24';
    checkIn.dispatchEvent(new Event('input'));

    const checkOut = getElement('[data-test="check-out"] input');
    checkOut.value = '12/23/24';
    checkOut.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(getElement('[data-test="total"]').textContent).toContain('Total --');
  });

  it('should show -- for total with invalid dates', () => {
    const checkIn = getElement('[data-test="check-in"] input');
    checkIn.value = '';
    checkIn.dispatchEvent(new Event('input'));

    const checkOut = getElement('[data-test="check-out"] input');
    checkOut.value = '';
    checkOut.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(getElement('[data-test="total"]').textContent).toContain('Total --');
  });

  it('should book home after clicking book button', () => {
    const checkIn = getElement('[data-test="check-in"] input');
    checkIn.value = '12/20/24';
    checkIn.dispatchEvent(new Event('input'));

    const checkOut = getElement('[data-test="check-out"] input');
    checkOut.value = '12/23/24';
    checkOut.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    getElement('[data-test="book-btn"] button').click();

    expect(dataService.bookHome$).toHaveBeenCalled();
  });

  it('should close the dialog and show notification after clicking the Book btn', () => {
    const checkIn = getElement('[data-test="check-in"] input');
    checkIn.value = '12/20/24';
    checkIn.dispatchEvent(new Event('input'));

    const checkOut = getElement('[data-test="check-out"] input');
    checkOut.value = '12/23/24';
    checkOut.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    getElement('[data-test="book-btn"] button').click();

    expect(checkIn).toBeTruthy();
    expect(checkOut).toBeTruthy();
  });

});
