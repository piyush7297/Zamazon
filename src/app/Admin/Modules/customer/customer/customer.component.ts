import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  categories: any[] = []
  filteredCategories: any[] = []
  categoryLength: number = 0
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageSize: number = 10;
  currentPage: number = 0
  searchText: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }
  onpageChange(event: PageEvent) {
    this.pageSize = event.pageSize
    this.currentPage = event.pageIndex;
    this.filterCategories()
  }
  filterCategories() {
    const startIndex = this.pageSize * this.currentPage;
    const endIndex = startIndex + this.pageSize;
    this.filteredCategories = this.categories.slice(startIndex, endIndex)
  }
  onSearch(searchValue: any) {
    this.searchText = searchValue.trim().replace(/\s/g, '');
    this.filterCategoriesFromSearch()
  }
  filterCategoriesFromSearch(): void {
    if (this.searchText == '') {
      this.filterCategories()
      this.categoryLength = this.categories.length

    }
    else {
      this.filteredCategories = this.categories.filter(item =>
        item.categoryname.toLowerCase().trim().replace(/\s/g, '').includes(this.searchText.toLowerCase())
      );
      this.categoryLength = this.filteredCategories.length
    }
  }
}
