import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcategoryComponent } from '../../category/addcategory/addcategory.component';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { ProductserviceService } from 'src/app/Admin/Services/ProductService/productservice.service';
import { Router } from '@angular/router';
import { CategoryserviceService } from 'src/app/Admin/Services/CategoryService/categoryservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  categories: any = []
  productImage : string = '';

  constructor(public dialog: MatDialog, public fb: FormBuilder, private productservice: ProductserviceService, private categoryservice: CategoryserviceService, private router: Router, private snackbar: MatSnackBar) {
    this.productForm()
  }

  ngOnInit(): void {
    this.getCategory()
  }

  public productform: FormGroup = new FormGroup({})

  productForm() {
    this.productform = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      price: [, [Validators.required]],
      category: ["", [Validators.required]],
      image: ["", [Validators.required]],
      quantity: [1,],
      size: ["",],
      // categorytype : ["" , [Validators.required]],
      status: ["", [Validators.required]],
      stock: ["", [Validators.required]],
      discount: ["", [Validators.required]],
      // discounttype : ["N/A" , [Validators.required]],
    })
  }

  submitForm() {
    if (this.productform.valid) {
      this.productservice.setProducts(this.productform.value)
      this.snackbar.open('Product Added Successfully', '', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
      this.router.navigate(['/admin/product'])
      this.productservice.getProducts().subscribe()
    }
    else {
      this.productform.markAllAsTouched()
      this.snackbar.open('Please fill all fields', '', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
  }
  // get pfValue() {
  //   this.pfControl('name')?.invalid
  //   return this.productform.value;
  // }

  // pfControl(controlName: string) {
  //   return this.productform.get(controlName);
  // }
  get name() {
    return this.productform.get('name')
  }
  get category() {
    return this.productform.get('category')
  }
  get image() {
    return this.productform.get('image')
  }
  get description() {
    return this.productform.get('description')
  }
  get price() {
    return this.productform.get('price')
  }
  get quantity() {
    return this.productform.get('quantity')
  }
  get size() {
    return this.productform.get('size')
  }
  get status() {
    return this.productform.get('status')
  }
  get stock() {
    return this.productform.get('stock')
  }
  get discount() {
    return this.productform.get('discount')
  }


  openDialog() {
    const dialogRef = this.dialog.open(AddcategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getCategory() {
    this.categoryservice.getCategory().subscribe((res: any) => {
      this.categories = res
    })
  }
}
