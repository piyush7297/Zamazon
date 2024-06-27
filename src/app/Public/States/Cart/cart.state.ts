export interface ShoppingCartState {
  items : ShoppingCartItem[];
  loading : boolean;
  error : string | null
}

export interface ShoppingCartItem {
  productId : string ;
  productName : string;
  price : number;
  quantity : number;
  category : string ;
  stock: any;
  image : string;
  description : string;
  totalPrice : number
}
