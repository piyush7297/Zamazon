import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormControlName, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryserviceService } from 'src/app/Admin/Services/CategoryService/categoryservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  allCategory: any[] = []

  constructor(public MatDialoRef: MatDialogRef<AddcategoryComponent>, public fb: FormBuilder, private categoryservice: CategoryserviceService, private router: Router, private snackbar: MatSnackBar) {
    this.categoryForm()
  }

  ngOnInit(): void {
    this.getCategory()
  }
  public categoryform: FormGroup = new FormGroup({})
  categoryForm() {
    this.categoryform = this.fb.group({
      categoryname: ["", [Validators.required]],
      categoryimage: ["", [Validators.required]],
      parentcategory: ["", [Validators.required]],
    })
  }

  submitForm() {
    if (this.categoryform.valid) {
      this.categoryservice.setCategory(this.categoryform.value)
      console.log(this.categoryform.value);
      this.MatDialoRef.close()
    }
    else {
      this.categoryform.markAllAsTouched()
      this.snackbar.open('Please fill all fields', '', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
  }

  get categoryname() {
    return this.categoryform.get('categoryname')
  }
  get categoryimage() {
    return this.categoryform.get('categoryimage')
  }
  get parentcategory() {
    return this.categoryform.get('parentcategory')
  }

  getCategory() {
    this.categoryservice.getCategory().subscribe((res: any) => {
      this.allCategory = res
      console.log(res);
    })

  }

  closeDialog() {
    this.MatDialoRef.close()
  }
}
