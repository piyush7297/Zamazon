import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/Admin/Store/Product/product';
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
  productId: any = this.activeroute.snapshot.paramMap.get('id');
  productData: any = {};
  cartProducts: any[] = [];
  allProducts: Product[] = [];
  relatedProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private activeroute: ActivatedRoute,
    private snackbar: MatSnackBar,
    public router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  customOptions: OwlOptions = {
    loop: false,
    dots: true,
    navSpeed: 700,
    nav: false,
    navText: ['<span class="material-icons">keyboard_arrow_left</span>', '<span class="material-icons">keyboard_arrow_right</span>'],
    items: 5,
    autoplay: true,
    margin: 18,
    responsiveRefreshRate: 500,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      },
      1440: {
        items: 3
      },
      2000 : {
        items : 5,
      }
    },
  };
  getProductDetails() {
    this.productService.getSingleProduct(this.productId).subscribe((res: any) => {
      this.productData = res;
      this.filterProducts(); // Call filterProducts only after productData is set
    });
    window.scroll(0,0)
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartService.getItems().subscribe((res: any) => {
      this.cartProducts = res;
    });
  }

  order(productId: string) {
    // this.router.navigate(['/order'])
  }

  addtoCart(productData: any) {
    this.cartService.getItems().subscribe((res) => {
      this.cartProducts = res;
    });
    const existingItem = this.cartProducts.find((item: any) => item.id === productData.id);
    if (existingItem) {
      this.cartProducts.map((item) => {
        item.id === productData.id ? { ...item, quantity: item.quantity + 1 } : item;
        console.log(this.cartProducts);
      });
      console.log('Product already exists', existingItem);
      this.snackbar.open('Product already exist', '', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    } else {
      this.cartService.addToCart(productData).subscribe((res: any) => {
        console.log(res);
        this.snackbar.open('Added to cart', '', {
          duration: 2000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        this.getCartProducts();
      });
    }
  }

  filterProducts() {
    this.store.select(({ products }) => products.products).subscribe((res) => {
      if (res) {
        this.allProducts = res.data;
        const categoryfiltered = this.allProducts.filter(product => product.category === this.productData.category);
        this.relatedProducts = categoryfiltered.filter(product => product.id !== this.productData.id)
      }
    });
  }
  viewProduct(productId: any) {
    this.router.navigate([`/productdetail/${productId}`])
    window.scroll(0, 0)
    this.productService.getSingleProduct(productId).subscribe((res: any) => {
      this.productData = res;
      console.log(res);
      this.filterProducts();
    });

  }
}
