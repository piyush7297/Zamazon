import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/Public/Services/CartService/cart.service';
import { ProductService } from 'src/app/Public/Services/ProductsService/product.service';
import { AppState } from 'src/app/Public/States/app.state';
import { addToCart } from 'src/app/Public/States/Cart/cart.action';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productId: any = this.activeroute.snapshot.paramMap.get('id')
  productData: any;
  cartProducts: any[] = []

  constructor(private product: ProductService, private cartservice: CartService, private activeroute: ActivatedRoute, private snackbar: MatSnackBar ,public router : Router) { }

  ngOnInit(): void {
    this.getProductDetails()
  }
  getProductDetails() {

    this.product.getSingleProduct(this.productId).subscribe((res: any) => {
      this.productData = res;
    })
    this.getCartProducts()
  }
  getCartProducts() {
    this.cartservice.getItems().subscribe((res: any) => {
      this.cartProducts = res
    })
  }
  order(productId : string){
    // this.router.navigate(['/order'])
  }
  addtoCart(productData: any) {
    this.cartservice.getItems().subscribe((res)=>{
      this.cartProducts = res
    })
    const existingItem = this.cartProducts.find((item: any) => item.id === productData.id)
    if (existingItem) {
      this.cartProducts.map((item) => {
        item.id === productData.id ? { ...item, quantity: item.quantity + 1 } : item
        console.log(this.cartProducts);
      })
      console.log('Product already exists', existingItem);
      this.snackbar.open('Product already exist', '', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
    else {
      this.cartservice.addToCart(productData).subscribe((res: any) => {
        console.log(res);
        this.snackbar.open('Added to cart', '', {
          duration: 2000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        this.getCartProducts()
      })
    }
 
    // this.Store.dispatch(addToCart(this.productData))
    // fetch data
    // find data
    // exists then +1

    // else push new obj
    // this.cart.addProducts(productData);
    // console.log(productData);
    // console.log(this.cart.productList);
  }
}
