import { Component, OnInit } from '@angular/core';
import { CategoryserviceService } from '../../../Services/CategoryService/categoryservice.service';
import { ProductserviceService } from '../../../Services/ProductService/productservice.service';
import { Store } from '@ngxs/store';
import { getCategory } from 'src/app/Admin/Store/Category/category.action';

@Component({
  selector: 'app-admin-filter',
  templateUrl: './admin-filter.component.html',
  styleUrls: ['./admin-filter.component.css']
})
export class AdminFilterComponent implements OnInit {
  panelOpenState = false;
  categories : any[] = [];
  filteredCategories : any[] = []
  searchText : string = ''
  categoriesLoaded : boolean = false

  constructor(private categoryService : CategoryserviceService , private ProductService : ProductserviceService ,private store : Store ) { }
  ngOnInit(): void {
    this.getCategories()
  }
  getCategories() {
    this.store.select(({categories}) => categories.categories).subscribe((res) => {
      if(res){
        this.categories = res.data
        this.filteredCategories = this.categories
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
  closeOffCanvas(){

  }
  onSearch(searchText : string){
    this.searchText = searchText.trim().toLowerCase().replace(/\s/g, '')
    this.searchFilter()
  }
  searchFilter(){
    if(this.searchText === '') {
      this.filteredCategories = this.categories
      console.log(this.categories);
    }
    this.filteredCategories = this.categories.filter(item =>
      (item.categoryname.trim().toLowerCase().replace(/\s/g, '').includes(this.searchText) || item.parentcategory.trim().toLowerCase().replace(/\s/g, '').includes(this.searchText))
    )
  }

}
