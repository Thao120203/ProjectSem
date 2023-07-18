import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/Service/cart.service";
import { ProductService } from "src/app/Service/product.service";
import { SendDataCartService } from "src/app/Service/senddatacart.service";
import { ProductAPI4 } from "src/app/modelapi/productapi4.model";
import { Cart } from "src/app/models/cart.model";

@Component({
  selector: 'app-root',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {
  products : ProductAPI4[];
  product0: ProductAPI4;
  product1: ProductAPI4;
  product2: ProductAPI4;
  product3: ProductAPI4;

  constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private sendDataCartService: SendDataCartService,
    ){}

  ngOnInit(): void {
    this._productService.readForHot().then(
      result=>{
        this.products = result as ProductAPI4[];
      }
    )
  }

  addcart(product : ProductAPI4){
    this.sendDataCartService.changeData(this._cartService.add(product) as Cart);
  }
}
