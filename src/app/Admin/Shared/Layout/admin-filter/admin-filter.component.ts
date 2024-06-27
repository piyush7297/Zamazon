import { Component, OnInit } from '@angular/core';
import { CategoryserviceService } from '../../../Services/CategoryService/categoryservice.service';
import { ProductserviceService } from '../../../Services/ProductService/productservice.service';

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

  constructor(private categoryService : CategoryserviceService , private ProductService : ProductserviceService) { }
  ngOnInit(): void {
    this.getCategories()
  }
  getCategories(){
    this.categoryService.getCategory().subscribe((res : any) => {
      this.categories = res
      this.filteredCategories = res
    })
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
