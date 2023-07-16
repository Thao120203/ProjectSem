import { Component,OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "src/app/Service/product.service";
import { PublisherService } from "src/app/Service/publisher.service";
import { ProductAPI4 } from "src/app/modelapi/productapi4.model";
import { Publisher } from "src/app/models/publisher.model";

@Component({
    selector: 'app-root',
    templateUrl: './listpublisher.component.html'
})
export class ListPublisherComponent implements OnInit{
  products: ProductAPI4[];
  publishers: Publisher[];
  first = 0;
  rows = 10;
  constructor(
    private _publisherService: PublisherService,
    private _productService: ProductService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit(): void {
      this._publisherService.read().then(
        (result) => {
          this.publishers = result as Publisher[];
          this._productService.readforuser().then(
            result => {
              this.products = result as ProductAPI4[];

            }
          )
        },
        (error) => {
          console.log(error);

        }
      );


    }


    isLastPage(): boolean {
      return this.publishers ? this.first === this.publishers.length - this.rows : true;
    }

    isFirstPage(): boolean {
      return this.publishers ? this.first === 0 : true;
    }

   countProduct(id: number): number {
    return this.products.filter(p=> p.publisherId == id).length;
   }
}
