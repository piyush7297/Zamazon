import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search = new BehaviorSubject("")

  // public url = 'http://localhost:3000/products'
  public url = 'http://192.168.2.210:3000/products'

  constructor ( private client : HttpClient) { }

  getProducts(){
    return this.client.get(this.url)
  }
  getSingleProduct(productId : number)
  {
    return this.client.get(`${this.url}/${productId}`)
  }
}
