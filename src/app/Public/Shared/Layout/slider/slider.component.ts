import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/Admin/Store/Product/product';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  productsData : Product[] = [];
  filteredProducts : Product[] = []

  customOptions: OwlOptions = {
    loop: true,
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
        items: 1
      },
      940: {
        items: 3
      }
    },
  };

  constructor(private store : Store) { }

  ngOnInit(): void {
    this.store.select(({products}) => products.products).subscribe((res) => {
      if (res) {
        this.productsData = res.data;
        console.log(this.productsData);
        this.filterProducts()
      }
    })
  }
  filterProducts(){
    const shoes = this.productsData.filter(product => product.category == 'Shoes').slice(1, 3);
    const watches = this.productsData.filter(product => product.category == 'Watch').slice(0, 2);
    this.filteredProducts = [...shoes, ...watches];
    console.log(this.filteredProducts);
  }
}
