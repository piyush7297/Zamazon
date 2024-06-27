import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import * as counterReducer from './counter.reducer';

export const selectCounterState = (state : AppState) => state.counter;

export const selectCount = createSelector (
  selectCounterState ,
  (state) =>  state?.count || 0
)
