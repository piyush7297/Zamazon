import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginatorfooter',
  templateUrl: './paginatorfooter.component.html',
  styleUrls: ['./paginatorfooter.component.css']
})
export class PaginatorfooterComponent implements OnInit {
  // itemLength : number = 0
  // pageSize : number = 0
  // pageSizeOption : any[] = [10 , 15 , 20]


  @Input() itemlength: number = 0
  @Input() size: number = 0
  @Input() sizeOption: any[] = []
  @Output() onChangeevent = new EventEmitter<any>()



  constructor() { }

  ngOnInit(): void {

  }
  emitEvent(event: any) {
    this.onChangeevent.emit(event)
  }

}
