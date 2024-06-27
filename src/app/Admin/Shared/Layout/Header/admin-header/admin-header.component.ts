import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

 @Input() headertext : string = '';
 @Input() placeholder : string = 'Search Anything...';
 @Output() searchItem = new EventEmitter<string>();

 searchValue : string = ''

  constructor() { }

  ngOnInit(): void {
  }
  onSearch(term : any){
    this.searchItem.emit(term)
  }

}
