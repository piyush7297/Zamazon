import { createAction, props } from "@ngrx/store";
import { ShoppingCartItem } from "./cart.state";

export const  loadProducts = createAction('[ShoppingCart] Load Products')

export const loadProductsSuccess = createAction(
  '[ShoppingCart] Load Products Success',
  props<{products : ShoppingCartItem[]}>()
)
export const loadProductsFailure = createAction(
  '[ShoppingCart] Load Products Failure ',
  props<{error : string}>()
)
export const addToCart = createAction(
  '[ShoppingCart] Add To Cart',
  props<{product : any }>()
)
export const removeFromCart = createAction(
  '[ShoppingCart] Remove From Cart',
  props<{productId : string}>()
)
