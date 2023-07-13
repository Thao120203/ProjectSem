import { Component,OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/Service/category.service";
import { ProductService } from "src/app/Service/product.service";
import { ProductAPI2 } from "src/app/modelapi/productapi2.model";
import { ProductAPI4 } from "src/app/modelapi/productapi4.model";
import { Category } from "src/app/models/category.model";
import { CategoryMenuParent } from "src/app/models/categoryMenuParent.model";
import { CategoryMenuSub } from "src/app/models/categoryMenuSub.model";

@Component({
    selector: 'app-root',
    templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit{
    products: ProductAPI4[];
    categories:Category[] = [];
    categoriesTitle: CategoryMenuParent[] = [];
    categoriesTitleSub: CategoryMenuSub[] = [];
    rangeValues: number[] = [20, 80];
    constructor(
        private _productService :ProductService,
        private activevateRoute:ActivatedRoute,
        private _categoryService: CategoryService
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
          let parent = 0;
          this._categoryService.read().then(result => {
            this.categories = result as Category[];
            for(let i = 0; i< this.categories.length; i++){
              if(this.categories[i].parentId == null){
                let a = new CategoryMenuParent(this.categories[i],i);
                this.categoriesTitle.push(a);
                parent = i;
              }else{
                let a = new CategoryMenuSub(this.categories[i],i,parent);
                this.categoriesTitleSub.push(a);
              }
            }
          });
    }
}