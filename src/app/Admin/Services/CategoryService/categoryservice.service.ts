import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {
  // url = 'http://localhost:3000/product_category'
  url = 'http://192.168.2.210:3000/product_category'
  constructor(private http : HttpClient) { }



  setCategory(category : any){
    this.http.post(this.url , category).subscribe((res:any)=>{
      console.log(res);
    })
  }
  getCategory():Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }
  removeCategory(CategoryId : any){
    return this.http.delete(`${this.url}/${CategoryId}`)
   }
   updateCategory(categoryId: any, updatedData: any): Observable<any> {
    return  this.http.patch(`${this.url}/${categoryId}`, updatedData)
    .pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
