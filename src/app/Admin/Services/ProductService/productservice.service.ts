import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/Public/Services/ProductsService/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  url = 'http://192.168.2.211:3000/products'
  // url = 'http://localhost:3000/products'
  constructor(private http : HttpClient ) { }

  setProducts(productdata:any){
    this.http.post(this.url , productdata).subscribe((res:any)=>{
      console.log(res);
    })
  }
  getProducts():Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }
  removeProduct(productId : any){
   return this.http.delete(`${this.url}/${productId}`)
  }
  getSingleProduct(productId : any){
   return this.http.get(`${this.url}/${productId}`)
  }
  updateProduct(productId: any, updatedData: any): Observable<any> {
    return  this.http.patch(`${this.url}/${productId}`, updatedData)
    .pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
