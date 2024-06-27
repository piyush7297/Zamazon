import { Component, OnInit   } from '@angular/core';
import { CartService } from 'src/app/Public/Services/CartService/cart.service';
import { ProductService } from 'src/app/Public/Services/ProductsService/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchTerm : string = "";
  public cartItems : number = 0;
  constructor( private productService : ProductService , private cart : CartService) { }

  ngOnInit(): void {
    this.cart.getItems().subscribe((res:any)=>{
      this.cartItems = res.length
    })
  }
  searchItem(event:any)
  {
    this.searchTerm = event.target.value;
    this.productService.search.next(this.searchTerm)
  }
}
