import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcategoryComponent } from '../addcategory/addcategory.component';
import { CategoryserviceService } from 'src/app/Admin/Services/CategoryService/categoryservice.service';
import { DeletedialogComponent } from 'src/app/Public/Shared/Layout/Dialogs/deletedialog/deletedialog.component';
import { UpdatedialogComponent } from 'src/app/Admin/Modules/category/updatecategory/updatedialog.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  categories: any[] = []
  filteredCategories: any[] = []
  categoryLength: number = 0
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageSize: number = 10;
  currentPage: number = 0
  searchText: string = ''

  constructor(public dialog: MatDialog, private categoryservice: CategoryserviceService) {
  }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories() {
    this.categoryservice.getCategory().subscribe((res: any) => {
      this.categories = res
      this.filteredCategories = this.categories
      this.categoryLength = this.filteredCategories.length
      this.filterCategories()
    })
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
  openDialog() {
    const dialogRef = this.dialog.open(AddcategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getCategories()
    });
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
  updateCategory(category: any) {
    const dialogRef = this.dialog.open(UpdatedialogComponent, { data: category });
    dialogRef.afterClosed().subscribe(result => {
      this.getCategories()
    });

  }

  removeCategory(categoryId: any) {
    const dialogRef = this.dialog.open(DeletedialogComponent, { data: 'this category' });
    dialogRef.afterClosed().subscribe(result => {
      if (result.result) {
        this.categoryservice.removeCategory(categoryId).subscribe((res: any) => {
          this.getCategories()
        })
      }
      else {
        console.log('Result False');
      }
    });
  }
}
