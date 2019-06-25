import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  users: any = [];

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.users = this.tableService.getData();
  }
}
