import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl , FormControlName , FormGroup , FormBuilder, Validators } from '@angular/forms';
import { CategoryserviceService } from 'src/app/Admin/Services/CategoryService/categoryservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.css']
})
export class UpdatedialogComponent implements OnInit {

  allCategory  : any[]= []
  categoryData ?: any ;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , public MatDialoRef : MatDialogRef<UpdatedialogComponent> , public fb : FormBuilder , private categoryservice : CategoryserviceService , private router : Router , private snackbar : MatSnackBar) {
    this.categoryForm()
   }

  ngOnInit(): void {
    this.getData()
    this.setFormValue()
    this.getCategory()
  }

  getData(){
    this.categoryData = this.data
  }
  public categoryform : FormGroup = new FormGroup({})
  categoryForm()
  {
    this.categoryform = this.fb.group ({
      categoryname : ["" , [Validators.required]],
      categoryimage : ["" , [Validators.required]],
      parentcategory : ["" , [Validators.required]],
    })
  }

  submitForm(){
    if(this.categoryform.valid){
      // this.categoryservice.setCategory(this.categoryform.value)
      console.log(this.categoryform.value);
      this.MatDialoRef.close()
    }
    else{
      this.categoryform.markAllAsTouched()
      this.snackbar.open('Please fill all fields', '' ,  {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }

  }
  get categoryname(){
    return this.categoryform.get('categoryname')
  }
  get categoryimage(){
    return this.categoryform.get('categoryimage')
  }
  get parentcategory(){
    return this.categoryform.get('parentcategory')
  }
  setFormValue(){
    this.categoryform.patchValue({categoryname : this.categoryData.categoryname})
    this.categoryform.patchValue({categoryimage : this.categoryData.categoryimage})
    this.categoryform.patchValue({parentcategory : this.categoryData.parentcategory})
  }
  getCategory(){
    this.categoryservice.getCategory().subscribe((res:any)=>{
      this.allCategory = res
      console.log(res);
    })
  }
  updateCategory(categoryId : any){
    this.categoryservice.updateCategory(categoryId , this.categoryform.value).subscribe((res:any)=>{
      console.log(res);
      this.snackbar.open('Category Updated Successfully', '' ,  {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
      })
  }
  closeDialog(){
    this.MatDialoRef.close()
  }

}
