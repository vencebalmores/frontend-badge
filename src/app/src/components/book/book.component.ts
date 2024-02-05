import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { BookComponent as BookComp } from './book.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import * as moment from 'moment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.less'
})
export class BookComponent implements OnInit {
  checkIn:any;
  checkOut:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
    public dialogRef: MatDialogRef<BookComp>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

  }

  calculateTotal(checkIn:any, checkOut:any) {
    const checkInDate = moment(checkIn, 'MM-DD-YY');
    const checkOutDate = moment(checkOut, 'MM-DD-YY');
    const totalDays = checkOutDate.diff(checkInDate, 'days');
    const tempTotal = (totalDays + 1) * this.data.home.price;

    return tempTotal > 0 ? `$${tempTotal}` : "--";
  }

  bookHome() {
    this.dataService.bookHome$()?.subscribe(() => {
      this.dialogRef.close();
      this.snackBar.open('Home booked!', '', { duration: 2000})
    });
  }
}
