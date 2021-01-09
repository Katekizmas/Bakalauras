import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TestinisKomponentas3DataSource, TestinisKomponentas3Item } from './testinis-komponentas3-datasource';

@Component({
  selector: 'app-testinis-komponentas3',
  templateUrl: './testinis-komponentas3.component.html',
  styleUrls: ['./testinis-komponentas3.component.scss']
})
export class TestinisKomponentas3Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TestinisKomponentas3Item>;
  dataSource: TestinisKomponentas3DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TestinisKomponentas3DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
