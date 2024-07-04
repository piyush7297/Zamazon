import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onSearch(term : any){
    this.searchItem.emit(term)
  }
  logout(){
    this.router.navigate(['/admin/login'])
  }
}
