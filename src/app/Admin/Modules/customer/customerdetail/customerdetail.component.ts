import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  constructor(private MatdialogRef : MatDialogRef<CustomerdetailComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.MatdialogRef.close()
  }
}
