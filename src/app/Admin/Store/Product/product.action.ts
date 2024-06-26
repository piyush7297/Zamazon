import { Product } from "./product";

export class addProduct {
  static readonly type = '[Product] Add'
  constructor (public payload : Product) {
  }
}

export class getProduct {
  static readonly type = '[Product] Get'
}

export class editProduct {
  static readonly type = '[Product] Edit'
  constructor(public payload : Product , public id : string){}
}
export class deleteProduct {
  static readonly type = '[Product] Delete'
  constructor(public id : string) {}
}
