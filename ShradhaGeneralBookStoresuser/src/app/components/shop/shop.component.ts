import { ReloadService } from './../../Service/reload.service';
import { Component,OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "src/app/Service/cart.service";
import { CategoryService } from "src/app/Service/category.service";
import { ProductService } from "src/app/Service/product.service";
import { ProductAPI2 } from "src/app/modelapi/productapi2.model";
import { ProductAPI4 } from "src/app/modelapi/productapi4.model";
import { Cart } from "src/app/models/cart.model";
import { Category } from "src/app/models/category.model";

@Component({
    selector: 'app-root',
    templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit{
    products: ProductAPI4[];
    layout: string = 'grid';
    constructor(
        private reloadService: ReloadService,
        private _cartService: CartService,
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

    // performAction() {
    //   // Thực hiện action ở đây

    //   // Gọi phương thức reloadComponentB() từ ReloadService để thông báo cho component B reload
    //   this.reloadService.reloadComponentB();
    // }
    addcart(product: ProductAPI4){
      this._cartService.add(product);
      console.log(JSON.parse(sessionStorage.getItem('cart')) as Cart);
      this.reloadService.reloadComponentB();
      return false;
    }

    sortbyoder(evt:any){
      let value = evt.target.value;

      console.log(value);

    }
}
