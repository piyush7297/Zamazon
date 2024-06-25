import { ShoppingCartState } from "./Cart/cart.state";
import { CounterState } from "./Counter/counter.reducer";

export interface AppState {
  counter : CounterState,
  cart : ShoppingCartState
}
