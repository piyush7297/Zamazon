import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AppState } from 'src/app/States/app.state';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  public cartProducts :any [] = [];
  public cartList = new BehaviorSubject<any>([])
  public url = 'http://192.168.2.211:3000/cart'
  // public url = 'http://localhost:3000/cart'
  // public url = 'https://fakestoreapi.com/carts'

  constructor( private http: HttpClient , ) { }
  // getcart = this.http.get(this.url)
  // addProducts(data : any):any
  // {
  //   const productId = data.id.toString();

  //   // Check if product exists
  //   let productFound: any | undefined;
  //   if (this.productList.length) {
  //     productFound = this.productList.find(p => p.id === productId);
  //   }
  //   if (productFound) {
  //     // Increment Quantity
  //     productFound.quantity += 1;
  //     productFound.total = data.price
  //   } else {
  //     // Add Product
  //     data.quantity = 1;
  //     this.cartList.next(this.productList)
  //     // return this.productList.push(data)
  //     console.log(data);
  //     return this.http.post(this.url ,data).subscribe((res : any)=>{
  //       console.log(res);
  //     })
  //   }
  //   console.log(this.productList);
  //   // this.cartList.next(this.getcart)
  //   return this.http.post(this.url ,data)
  // }
  addToCart(productData:any){
    return this.http.post(this.url , productData)
  }
  updateCart(){

  }
  getItems():Observable<any[]>
  {
  return this.http.get<any[]>(this.url)
  }
  removeCartItem(productId : any) : Observable<any> {
  //  return this.productList.map((a:any , index:any)=>{
  //     if(product.id === a.id){
  //       this.productList.splice(index,1)
  //     }
  //   })
  return this.http.delete(`${this.url}/${productId}`)
  }
  // removeallItems(){
  //   this.productList = []
  //   this.cartList.next(this.productList)
  // }
  // emptyCart(): Observable<any> {
  //   return  this.http.patch(this.url , [])
  //   .pipe(
  //     catchError(this.handleError)
  //   )
  // }
  // private handleError(error: HttpErrorResponse) {
  //   console.error('An error occurred:', error.message);
  //   return throwError('Something went wrong; please try again later.');
  // }
  emptyCart(): Observable<any> {
    return this.getItems().pipe(
      switchMap(items => {
        const deleteRequests = items.map(item => this.removeCartItem(item.id));
        return forkJoin(deleteRequests);
      }),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
