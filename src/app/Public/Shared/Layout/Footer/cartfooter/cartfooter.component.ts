import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeletedialogComponent } from 'src/app/Public/Shared/Layout/Dialogs/deletedialog/deletedialog.component';
import { CartService } from 'src/app/Public/Services/CartService/cart.service';

@Component({
  selector: 'app-cartfooter',
  templateUrl: './cartfooter.component.html',
  styleUrls: ['./cartfooter.component.css']
})
export class CartfooterComponent implements OnInit {
  @Input() grandTotal : number = 0;
  @Output() emptyCart = new EventEmitter<any>()
  constructor( private cartService:CartService ,private dialog : MatDialog ) { }

  ngOnInit(): void {
  }

  emitEvent(value:any){

    this.emptyCart.emit()
  }
}
