import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Product } from "./product";
import { ProductserviceService } from "../../Services/ProductService/productservice.service";
import { addProduct, getProduct } from "./product.action";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

export class productModel{
  products!: {
    data: Product[],
    isLoaded: boolean,
  }
}

const initialState: productModel = {} as productModel;

@State<productModel>(
  {
    name : 'products',
    defaults : {
      ...initialState
    }
  }
)
@Injectable()
export class productState {
  constructor (private productService : ProductserviceService){}

  @Selector()
  static getProductState(state : productModel){
    return state.products
  }

  @Action(getProduct)
  getProducts({getState , setState} : StateContext<productModel>){
    console.log('Get state works');
    return this.productService.getProducts().pipe(tap(res =>{
      console.log('tap' , res);
      const state = getState()

      setState({
        ...state ,
        products : {
          data: res,
          isLoaded: true
        },
      })
    }));
  }
}
