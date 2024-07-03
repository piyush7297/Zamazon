import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcategoryComponent } from '../addcategory/addcategory.component';
import { CategoryserviceService } from 'src/app/Admin/Services/CategoryService/categoryservice.service';
import { DeletedialogComponent } from 'src/app/Public/Shared/Layout/Dialogs/deletedialog/deletedialog.component';
import { UpdatedialogComponent } from 'src/app/Admin/Modules/category/updatecategory/updatedialog.component';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngxs/store';
import { getCategory } from 'src/app/Admin/Store/Category/category.action';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  categories: any[] = []
  filteredCategories: any[] = []
  categoriesLoaded : boolean = false;
  categoryLength: number = 0
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageSize: number = 10;
  currentPage: number = 0
  searchText: string = ''

  constructor(public dialog: MatDialog, private categoryservice: CategoryserviceService , private store : Store) {
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.store.select(({categories}) => categories.categories).subscribe((res) => {
      if(res){
        this.categories = res.data
        this.filteredCategories = this.categories
        this.categoryLength = this.filteredCategories.length
        this.filterCategories()
      }
    })
    this.store.select(({categories}) => categories.categories).subscribe((res) => {
      if(res){
        this.categoriesLoaded = res.isLoaded
      }
    })
    if(!this.categoriesLoaded){
      this.store.dispatch(new getCategory() )
    }
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
      this.store.dispatch(new getCategory() )
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
      this.store.dispatch(new getCategory() )
    });

  }

  removeCategory(categoryId: any) {
    const dialogRef = this.dialog.open(DeletedialogComponent, { data: 'this category' });
    dialogRef.afterClosed().subscribe(result => {
      if (result.result) {
        this.categoryservice.removeCategory(categoryId).subscribe((res: any) => {
          this.store.dispatch(new getCategory() )
        })
      }
      else {
        console.log('Result False');
      }
    });
  }
}
