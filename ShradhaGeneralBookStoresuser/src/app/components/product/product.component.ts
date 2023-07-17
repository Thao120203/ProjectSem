import { Component,OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "src/app/Service/cart.service";
import { ProductService } from "src/app/Service/product.service";
import { SendDataCartService } from "src/app/Service/senddatacart.service";
import { ProductAPI4 } from "src/app/modelapi/productapi4.model";
import { Cart } from "src/app/models/cart.model";

@Component({
    selector: 'app-root',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit{
    product:ProductAPI4;
    constructor(
        private activevateRoute:ActivatedRoute,
        private _productService:ProductService,
        private sendDataCartService: SendDataCartService,
        private _cartService: CartService
    ){}
    ngOnInit(): void {
        this.activevateRoute.paramMap.subscribe(c=>{
            this._productService.getuser(c.get('id')).then(result=>{
              this.product = result[0] as ProductAPI4;
              const htmlContent: HTMLElement = document.createElement('section');
              htmlContent.innerHTML = this.product.description;
              console.log(htmlContent);
            },
            error=>{
              console.log(error);
            })
          });

    }
    addcart(product: ProductAPI4) {
      this.sendDataCartService.changeData(this._cartService.add(product) as Cart)
    }
}
