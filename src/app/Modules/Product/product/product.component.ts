import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/Services/CartService/cart.service';
import { ProductService } from 'src/app/Services/ProductsService/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges, DoCheck {
  searchKey: string = '';
  productsData: any[] = [];
  cartProducts: any[] = [];
  searchText: string = ''
  filteredProducts: any[] = []
  constructor(private productService: ProductService, private cartService: CartService, private snackbar: MatSnackBar) {
  }
  ngDoCheck(): void {
  }
  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.fetchData()
    this.getCartProducts()
    // this.cartService.getItems().subscribe((res: any) => {
    //   this.cartProducts = res
    //   console.log(this.cartProducts);
    // })
  }
  fetchData() {
    this.productService.getProducts().subscribe((data: any) => {
      this.productsData = data
      this.filteredProducts = this.productsData
    })
  }
  // filterData(){
  //   this.productService.search.subscribe((res:any)=>{
  //     this.searchKey = res
  //     })
  //   this.getCartProducts()
  // }
  onsearch(value: any) {
    this.searchText = value.replace(/\s/g, '');
    this.filterProducts()
  }
  filterProducts() {
    if (this.searchText == '') {
      this.filteredProducts = this.productsData
    }
    else {
      this.filteredProducts = this.productsData.filter(item => {
        return item.name.toLowerCase().trim().replace(/\s/g, '').includes(this.searchText.toLowerCase())
      })
    }
  }
  getCartProducts() {
    this.cartService.getItems().subscribe((res: any) => {
      this.cartProducts = res
      console.log(res);
    })
  }
  addToCart(event: Event, product: any) {
    const existingItem = this.cartProducts.find((item: any) => item.id === product.id)
    event.stopPropagation()
    if (existingItem) {
      console.log('Product already exist');
      this.snackbar.open('Product already exist', '', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
    else {
      this.cartService.addToCart(product).subscribe((res: any) => {
        console.log(res);
        this.snackbar.open('Added to cart', '', {
          duration: 2000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        this.getCartProducts()
      })
    }
  }
}
