import { Component, OnInit } from '@angular/core';
import { Store , } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../States/app.state';
import { selectCount } from '../States/Counter/counter.selector';
import { decrement, increment, reset } from '../States/Counter/counter.action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // count$ : Observable<number>;
  // private store : Store<AppState> paste this in the constructor
  constructor() {
    // this.count$ = this.store.select(selectCount)
   }

  ngOnInit(): void {
  }

  // increment(){
  //   this.store.dispatch(increment())
  // }
  // decrement(){
  //   this.store.dispatch(decrement())
  // }
  // reset(){
  //   this.store.dispatch(reset())
  // }



}
