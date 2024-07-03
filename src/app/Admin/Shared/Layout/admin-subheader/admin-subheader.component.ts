import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryserviceService } from '../../../Services/CategoryService/categoryservice.service';

@Component({
  selector: 'app-admin-subheader',
  templateUrl: './admin-subheader.component.html',
  styleUrls: ['./admin-subheader.component.css']
})
export class AdminSubheaderComponent implements OnInit {
  @Input() maintext : string = ''

  @Output() newBtnEvent = new EventEmitter<any>();


  constructor(public dialog : MatDialog ,) {
  }

  ngOnInit(): void {
  }
  emitEvent(value : any){
    this.newBtnEvent.emit(value)
  }

}
