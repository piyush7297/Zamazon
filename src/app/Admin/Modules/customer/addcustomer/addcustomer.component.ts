import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  public checked : boolean = true
  constructor(private MatdialogRef : MatDialogRef<AddcustomerComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.MatdialogRef.close()
  }
}
