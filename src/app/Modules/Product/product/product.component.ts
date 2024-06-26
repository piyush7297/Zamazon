import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Admin/Store/Product/product';
import { getProduct } from 'src/app/Admin/Store/Product/product.action';
import { productState } from 'src/app/Admin/Store/Product/product.state';
import { CartService } from 'src/app/Services/CartService/cart.service';
import { ProductService } from 'src/app/Services/ProductsService/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  searchKey: string = '';
  // @Select(productState.getProductState) products$!: Observable<Product[]>;
  productLoaded : boolean = false;
  productsData: any[] = [];
  cartProducts: any[] = [];
  searchText: string = ''
  filteredProducts: any[] = []
  constructor(private productService: ProductService, private cartService: CartService, private snackbar: MatSnackBar ,public store : Store) {
  }
  ngOnInit(): void {
    this.fetchData()
    this.getCartProducts()
    // this.cartService.getItems().subscribe((res: any) => {
    //   this.cartProducts = res
    //   console.log(this.cartProducts);
    // })
    this.store.select(({products}) => products.products).subscribe((res) => {
      if (res) {
        this.productsData = res.data;
        this.filteredProducts = this.productsData
      }
    })
  }
  fetchData() {
    this.store.select(({products})=> products.products).subscribe((res)=>{
      if(res){
        this.productLoaded = res.isLoaded
      }
    })
    if(!this.productLoaded){
      this.store.dispatch(new getProduct())
    }
  }
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
