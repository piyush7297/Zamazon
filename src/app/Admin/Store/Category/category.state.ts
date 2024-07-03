import { Action, State, StateContext } from "@ngxs/store";
import { Category } from "./category"
import { Injectable } from "@angular/core";
import { CategoryserviceService } from "../../Services/CategoryService/categoryservice.service";
import { getCategory } from "./category.action";
import { tap } from "rxjs/operators";

export class categoryModel{
  categories !: {
    data : Category[],
    isLoaded : boolean
  }
}

const initialState : categoryModel = {} as categoryModel;

@State<categoryModel>(
  {
    name : 'categories',
    defaults : {
      ...initialState
    }
  }
)
@Injectable()
export class categoryState {
  constructor(private categoryService : CategoryserviceService){}



  @Action(getCategory)
  getCategories({getState , setState} : StateContext<categoryModel>){
    return this.categoryService.getCategory().pipe(tap( res => {
      const state = getState()
       
      setState({
        ...state , 
        categories : {
          data : res,
          isLoaded : true
        }
      })
    }))
  }
}