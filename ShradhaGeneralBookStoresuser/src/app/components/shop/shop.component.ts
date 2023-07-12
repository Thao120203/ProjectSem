import { Component,OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/Service/category.service";
import { ProductService } from "src/app/Service/product.service";
import { ProductAPI2 } from "src/app/modelapi/productapi2.model";
import { ProductAPI4 } from "src/app/modelapi/productapi4.model";
import { Category } from "src/app/models/category.model";

@Component({
    selector: 'app-root',
    templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit{
    products: ProductAPI4[];
    constructor(
        private _productService :ProductService,
        private activevateRoute:ActivatedRoute
    ){

    }
    ngOnInit(): void {
        this.activevateRoute.paramMap.subscribe(c=>{
            this._productService.readforcategoryuser(c.get('id')).then(result=>{
              this.products = result as ProductAPI4[];
              console.log(this.products);
            },
            error=>{
              console.log(error);
            })
          });
      
    }
}