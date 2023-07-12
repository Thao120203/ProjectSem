import { Component,OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/Service/product.service";
import { ProductAPI4 } from "src/app/modelapi/productapi4.model";

@Component({
    selector: 'app-root',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit{
    product:ProductAPI4;
    constructor(
        private activevateRoute:ActivatedRoute,
        private _productService:ProductService
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
}