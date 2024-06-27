import { createReducer, on } from "@ngrx/store";
import { ShoppingCartItem, ShoppingCartState } from "./cart.state";
import { addToCart, loadProducts, loadProductsFailure, loadProductsSuccess, removeFromCart } from "./cart.action";

const initialState : ShoppingCartState = {
  items : [],
  loading : false,
  error : null
}

export const shoppingCartReducer = createReducer(
  initialState,
  on(loadProducts , (state) => ({...state , loading : true})),
  on(loadProductsSuccess , (state , {products}) => ({
    ...state,
    loading : false,
    items : products
  })),
  on(loadProductsFailure , (state , {error}) => ({
    ...state ,
    loading: false,
    error : error
  })),
  on(addToCart , (state , {product}) =>{
    const existingItem = state.items.find((item) => item.productId === product.id);

    if(existingItem) {
      return {
        ...state ,
        items : state.items.map((item)=>
         item.productId === product.id ? {...item , quantity : item.quantity + 1} : item
        ),
      };
    }
    else{
      return {
        ...state ,
        items : [  ...state.items, product]
      }
    }
  }),
  on(removeFromCart , (state ,  {productId}) => ({
    ...state ,
    items : state.items.filter((item)=> item.productId !== productId)
  }))
)
// export function reducer(state: any, action: any) {
//   return shoppingCartReducer(state, action);
// }
