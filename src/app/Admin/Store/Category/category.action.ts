import { Category } from "./category";

export class addCategory {
  static readonly type = '[Category] Add'
  constructor(public payload : Category){}
}

export class getCategory {
  static readonly type = '[Category] Get'
}
export class editCategory {
  static readonly type = '[Category] Edit'
  constructor(public payload : Category , public id : string){}
}
export class deleteCategory {
  static readonly type = '[Category] Delete'
  constructor(public id : string){}
}
