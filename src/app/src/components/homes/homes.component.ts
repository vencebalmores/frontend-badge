import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { DialogService } from '../../services/dialog.service';
import { BookComponent } from '../../components/book/book.component';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.less']
})
export class HomesComponent implements OnInit {
  homes$: any;

  constructor(private dataService: DataService, private dialogService: DialogService) { }

  ngOnInit() {
    this.homes$ = this.dataService.getHomes$();
  }

  openDialog(home: any) {
    this.dialogService.open(BookComponent, {
      width: '400px',
      height: '500px',
      data: { home }
    });
  }
}
