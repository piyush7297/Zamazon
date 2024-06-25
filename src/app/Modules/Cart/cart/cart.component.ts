import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DeletedialogComponent } from 'src/app/Shared/Layout/Dialogs/deletedialog/deletedialog.component';
import { CartService } from 'src/app/Services/CartService/cart.service';
import { AppState } from 'src/app/States/app.state';
import { selectShoppingCartItems } from 'src/app/States/Cart/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts : any[] = [];
  grandTotal : number = 1
  // cartService = Inject(CartService)

  constructor( private cart : CartService , private dialog : MatDialog , private store : Store<AppState>) {

   }

  ngOnInit(): void {
    console.log(this.store.select(selectShoppingCartItems));
    this.fetchData()
    this.cartProducts.map((p)=>{
      console.log(p.quantity);
    })
  }

  fetchData()
  {
    this.cart.getItems().subscribe((res:any)=>{
      this.cartProducts = res;
    })
  }
  add(event : Event , product : any)
  {
    event.stopPropagation()
    if(product.stock>product.quantity ){

      product.quantity++
      product.totalPrice = product.price * product.quantity
    }
    else{
      console.log('Stock not available');

    }
    console.log(this.cartProducts.map((p:any)=>{
    const total =  p.totalPrice
    return total
    }));
  }
  sub(event : Event ,  product : any)
  {
    event.stopPropagation()
    if(product.quantity == 1)
    {
      product.quantity==1;
    }
    else
    {
      product.quantity --
      product.totalPrice = product.price * product.quantity
    }
  }
  removeItem(event : Event , productId:any)
  {
    event.stopPropagation()
    this.cart.removeCartItem(productId).subscribe((res:any)=>{
      console.log(res);
      this.fetchData()
    });
  }
  emptyCart(){
    const dialogRef = this.dialog.open(DeletedialogComponent , {data : 'cart items'});

    dialogRef.afterClosed().subscribe(result => {
      if(result.result){
        this.cart.emptyCart().subscribe(
          (response : any) => {
            console.log('Cart cleared successfully:', response);
            this.fetchData()
            // Optionally, you can update your component state or UI here
          },
         ( error:any) => {
            console.error('Error clearing cart:', error);
          }
        );
      }
    });

  }
}
