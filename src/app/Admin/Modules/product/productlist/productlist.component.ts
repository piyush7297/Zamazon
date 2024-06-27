import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { ProductserviceService } from 'src/app/Admin/Services/ProductService/productservice.service';
import { Router } from '@angular/router';
import { DeletedialogComponent } from 'src/app/Public/Shared/Layout/Dialogs/deletedialog/deletedialog.component';
import { ProductService } from 'src/app/Public/Services/ProductsService/product.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  allProducts: any[] = []
  filteredProducts: any[] = []
  pageSizeOptions: number[] = [5, 10, 15, 20];
  productLength: number = 0
  pageSize: number = 10;
  currentPage: number = 0;
  searchText: string = ''


  ngOnInit(): void {
    this.getProducts()
  }
  constructor(public dialog: MatDialog, private productService: ProductserviceService, private router: Router, private webproductService: ProductService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddproductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getProducts()
    });
  }
  btnClick() {
    this.router.navigate(['admin/product/add'])
  }
  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.allProducts = res
      this.filteredProducts = this.allProducts
      this.productLength = this.filteredProducts.length
      console.log(res);
      this.filterProducts()
    })
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.filterProducts()
  }
  filterProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredProducts = this.allProducts.slice(startIndex, endIndex)
  }
  searchItem(searchValue: any) {
    this.searchText = searchValue.replace(/\s/g, '');
    this.filterProductsFromSearch()
  }
  filterProductsFromSearch(): void {
    if (this.searchText == '') {
      this.filterProducts()
      this.productLength = this.allProducts.length
    }
    else {
      this.filteredProducts = this.allProducts.filter(item =>
        item.name.toLowerCase().trim().replace(/\s/g, '').includes(this.searchText.toLowerCase())
      );
      this.productLength = this.filteredProducts.length
    }
  }
  removeProduct(productId: any) {
    const dialogRef = this.dialog.open(DeletedialogComponent, { data: 'product' });
    dialogRef.afterClosed().subscribe(result => {
      if (result.result) {
        this.productService.removeProduct(productId).subscribe((res: any) => {
          this.getProducts()
        })
      }
      else {
        console.log('Result False');
      }
    });
  }
}
