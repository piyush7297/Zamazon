import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductserviceService } from 'src/app/Admin/Services/ProductService/productservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeletedialogComponent } from 'src/app/Public/Shared/Layout/Dialogs/deletedialog/deletedialog.component';
import { ProductService } from 'src/app/Public/Services/ProductsService/product.service';
import { CategoryserviceService } from 'src/app/Admin/Services/CategoryService/categoryservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddcategoryComponent } from '../../category/addcategory/addcategory.component';
import { Store } from '@ngxs/store';
import { getProduct } from 'src/app/Admin/Store/Product/product.action';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  categories: any = []
  productId: any = this.activerroute.snapshot.paramMap.get('id')
  productData: any;
  productImage : string = ''

  constructor(public dialog: MatDialog, public fb: FormBuilder, private activerroute: ActivatedRoute, private productservice: ProductserviceService, private categoryservice: CategoryserviceService, private router: Router, private snackbar: MatSnackBar , private store : Store) {
    this.productForm()
  }

  ngOnInit(): void {
    this.getProductData()
  }


  public productform: FormGroup = new FormGroup({})

  productForm() {
    this.productform = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      price: ["", [Validators.required]],
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
      this.productservice.updateProduct(this.productId, this.productform.value).subscribe((res: any) => {
        console.log(res);
        this.store.dispatch(new getProduct())
      })
      this.snackbar.open('Product Updated Successfully', '', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
      this.router.navigate(['/admin/product'])
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


  getProductData() {
    this.productservice.getSingleProduct(this.productId).subscribe((res: any) => {
      this.productData = res
      console.log(this.productData);
      this.getCategory()
    })
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
      this.setFormValue()

    })
  }
  setFormValue() {
    this.productform.patchValue({ name: this.productData?.name })
    this.productform.patchValue({ description: this.productData?.description })
    this.productform.patchValue({ image: this.productData?.image })
    this.productform.patchValue({ category: this.productData?.category })
    this.productform.patchValue({ discount: this.productData?.discount })
    this.productform.patchValue({ price: this.productData?.price })
    this.productform.patchValue({ quantity: this.productData?.quantity })
    this.productform.patchValue({ size: this.productData?.size })
    this.productform.patchValue({ status: this.productData?.status })
    this.productform.patchValue({ stock: this.productData?.stock })
  }
}
