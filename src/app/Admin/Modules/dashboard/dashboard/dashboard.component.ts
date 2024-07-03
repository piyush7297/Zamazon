import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../../Services/ProductService/productservice.service';
import { CategoryserviceService } from '../../../Services/CategoryService/categoryservice.service';
import { Store } from '@ngxs/store';
import { getProduct } from 'src/app/Admin/Store/Product/product.action';
import { getCategory } from 'src/app/Admin/Store/Category/category.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalProducts ?: number
  totalcategories ?: number
  productLoaded : boolean = false
  categoriesLoaded : boolean = false

  constructor(private productservice : ProductserviceService , private categoryService : CategoryserviceService , private store : Store ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.store.select(({products}) => products.products).subscribe((res) => {
      if (res) {
        this.totalProducts = res.data.length
      }
    })
    this.store.select(({products})=> products.products).subscribe((res)=>{
      if(res){
        this.productLoaded = res.isLoaded
      }
    })
    if(!this.productLoaded){
      this.store.dispatch(new getProduct())
    }
    this.getCategories()
  }
  getCategories() {
    this.store.select(({categories}) => categories.categories).subscribe((res) => {
      if(res){
        this.totalcategories = res.data.length
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
}
