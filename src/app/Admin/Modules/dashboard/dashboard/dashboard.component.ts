import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../../Services/ProductService/productservice.service';
import { CategoryserviceService } from '../../../Services/CategoryService/categoryservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalProducts ?: number
  totalcategories ?: number
  obj1 : object = {
      "_id": {
        "$oid": "666d9052c32ca9f45deb7b9f"
      },
      "tags": [
        "checks"
      ],
      "attributes_tags": [],
      "total_amount": 0,
      "total_rate_amount": 0,
      "total_pieces": 0,
      "overall_quantity": 0,
      "internalDescription": "",
      "has_variation": true,
      "is_any_opc_deactivated": false,
      "active": true,
      "trashed": false,
      "min_wsp": 0,
      "third_party_client_id": "",
      "third_party_obj_id": "",
      "org_id": {
        "$oid": "65433b6579b9d30e50524265"
      },
      "brand_id": {
        "$oid": "65433b6579b9d30e50524265"
      },
      "name": "3003F/S",
      "sku": "3003FS",
      "pictures": [],
      "min_mrp": 1149,
      "product_id": "65433b6579b9d30e50524265_3003FS",
      "order_id": "65433b2479b9d30e5052426227ac9a40-2b17-11ef-86b4-dd5fdb17047f1718456392164",
      "category_id": {
        "$oid": "666d2b3764538d24c4bff939"
      },
      "created_at": 1718456401757,
      "created_by": {
        "$oid": "65433b2479b9d30e50524262"
      },
      "client_object_id": "65433b2479b9d30e5052426227ac9a40-2b17-11ef-86b4-dd5fdb17047f171845639216465433b6579b9d30e50524265_3003FS",
      "description": [],
      "__v": 0,
      "submit_details": "",
      "updated_at": 1718456401757,
      "updated_by": {
        "$oid": "65433b2479b9d30e50524262"
      }
  }
  obj2 : object = {
      "_id": {
        "$oid": "666d908979a0a14518c044be"
      },
      "tags": [
        "checks"
      ],
      "attributes_tags": [
        {
          "attr_id": {
            "$oid": "65433b6579b9d30e50524268"
          },
          "val": [
            "46"
          ]
        },
        {
          "attr_id": {
            "$oid": "65433b6579b9d30e5052426a"
          },
          "val": [
            "F/s"
          ]
        },
        {
          "attr_id": {
            "$oid": "65433b6579b9d30e50524269"
          },
          "val": [
            "STANDARD"
          ]
        }
      ],
      "total_amount": 11490,
      "total_rate_amount": 6700,
      "total_pieces": 10,
      "overall_quantity": 10,
      "internalDescription": "",
      "has_variation": true,
      "is_any_opc_deactivated": false,
      "active": true,
      "trashed": false,
      "org_id": {
        "$oid": "65433b6579b9d30e50524265"
      },
      "name": "3003F/S",
      "sku": "3003FS",
      "pictures": [],
      "min_mrp": 1149,
      "product_id": "65433b6579b9d30e50524265_3003FS",
      "order_id": "65433b2479b9d30e5052426248a74a60-2b17-11ef-8a69-57961e761f811718456447494",
      "category_id": {
        "$oid": "666d2b3764538d24c4bff939"
      },
      "created_at": 1718456456775,
      "created_by": {
        "$oid": "65433b2479b9d30e50524262"
      },
      "client_object_id": "65433b2479b9d30e5052426248a74a60-2b17-11ef-8a69-57961e761f81171845644749465433b6579b9d30e50524265_3003FS",
      "description": [],
      "__v": 0,
      "updated_at": 1718456456775,
      "updated_by": {
        "$oid": "65433b2479b9d30e50524262"
      }
  }
  constructor(private productservice : ProductserviceService , private categoryService : CategoryserviceService) { }

  ngOnInit(): void {
    this.getProducts()
    this.compareObject()
  }
  compareObject(){
    let obj1Keys = Object.keys(this.obj1)
    let obj2Keys = Object.keys(this.obj2)
    let finalArr = obj1Keys.filter(( item )=> !obj2Keys.includes( item))
    console.log(finalArr);
  }
  getProducts(){
    this.productservice.getProducts().subscribe((res:any)=>{
      this.totalProducts = res.length
    })
    this.getCategories()
  }
  getCategories(){
    this.categoryService.getCategory().subscribe((res:any)=>{
      this.totalcategories = res.length
    })
  }
}
