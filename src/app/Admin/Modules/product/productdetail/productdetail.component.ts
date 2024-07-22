import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  productData : any ;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private MatdialogRef: MatDialogRef<ProductdetailComponent>) { }

  ngOnInit(): void {
    this.productData = this.data
    console.log(this.productData);
  }
  closeDialog() {
    this.MatdialogRef.close()
  }
}
