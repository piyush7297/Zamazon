import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShoppingCartState } from "./cart.state";


const selectShoppingCartState = createFeatureSelector<ShoppingCartState>(
  'shoppingCart'
)

export const selectShoppingCartItems = createSelector(
  selectShoppingCartState ,
    (state) => state.items
)
export const selectShoppingCartLoading = createSelector(
  selectShoppingCartState ,
  (state) => state.loading
);
export const selectShoppingCartError = createSelector(
  selectShoppingCartState ,
  (state) => state.error
)
