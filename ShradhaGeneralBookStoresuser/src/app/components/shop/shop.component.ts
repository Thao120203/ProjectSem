import { Product } from './../../models/product.model copy';
import { ReloadService } from './../../Service/reload.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthorService } from 'src/app/Service/author.service';
import { CartService } from "src/app/Service/cart.service";
import { CategoryService } from "src/app/Service/category.service";
import { ProductService } from "src/app/Service/product.service";
import { SendDataCartService } from 'src/app/Service/senddatacart.service';
import { ProductAPI2 } from "src/app/modelapi/productapi2.model";
import { ProductAPI4 } from "src/app/modelapi/productapi4.model";
import { Author } from 'src/app/models/author.model';
import { Cart } from "src/app/models/cart.model";
import { Category } from "src/app/models/category.model";
import { CategoryMenuParent } from "src/app/models/categoryMenuParent.model";
import { CategoryMenuSub } from "src/app/models/categoryMenuSub.model";

@Component({
  selector: 'app-root',
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {
  products: ProductAPI4[];
  productShow: ProductAPI4[];
  product: Product;
  authors: Author[];
  categories: Category[] = [];
  categoriesTitle: CategoryMenuParent[] = [];
  categoriesTitleSub: CategoryMenuSub[] = [];
  rangeValues: number[] = [0, 20];

  lenghtProduct:number = 0;
  pagenumber:number = 1;
  pagenumbermax:number = 0;

  constructor(
    private reloadService: ReloadService,
    private _cartService: CartService,
    private _productService: ProductService,
    private activevateRoute: ActivatedRoute,
    private _categoryService: CategoryService,
    private _authorService: AuthorService,
    private sendDataCartService: SendDataCartService,
  ){}
  ngOnInit(): void {
    this.productShow = [];
    this.activevateRoute.paramMap.subscribe(c => {
      if (c.get('id') != "0") {
        this._productService.readforcategoryuser(c.get('id')).then(result => {
          this.products = result as ProductAPI4[];
          this.pagenumbermax = Math.ceil(this.products.length / 9);
          this.lenghtProduct = this.products.length;
          this.productShow = this.getData(this.pagenumber,this.products);
        },
          error => {
            console.log(error);
          })
      } else {
        this._productService.readforuser().then(result => {
          this.products = result as ProductAPI4[];
          this.pagenumbermax = Math.ceil(this.products.length / 9);
          this.lenghtProduct = this.products.length;
          this.productShow = this.getData(this.pagenumber,this.products);
        },
          error => {
            console.log(error);
          })
      }
    });
    let parent = 0;
    this._categoryService.read().then(result => {
      this.categories = result as Category[];
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].parentId == null) {
          let a = new CategoryMenuParent(this.categories[i], i);
          this.categoriesTitle.push(a);
          parent = i;
        } else {
          let a = new CategoryMenuSub(this.categories[i], i, parent);
          this.categoriesTitleSub.push(a);
        }
      }
    });
  }

  // performAction() {
  //   // Thực hiện action ở đây

  //   // Gọi phương thức reloadComponentB() từ ReloadService để thông báo cho component B reload
  //   this.reloadService.reloadComponentB();
  // }
  addcart(product: ProductAPI4) {
    this.sendDataCartService.changeData(this._cartService.add(product) as Cart);
  }

  sortbyoder(evt: any) {
    let value = evt.target.value;
    console.log(value);
  }

  rangePrice() {
    this.productShow = [];
    this.pagenumber = 1;
    let productS:ProductAPI4[] = this.products.filter(p=> p.cost >=this.rangeValues[0] && p.cost <= this.rangeValues[1]);
    this.pagenumbermax = Math.ceil(productS.length / 9);
    this.lenghtProduct = productS.length;
    this.productShow = this.getData(this.pagenumber,productS);
  }

  search(keyword: any) {
    let value = keyword.target.value;
    this.productShow = [];
    this.pagenumber = 1;
    let productS:ProductAPI4[] = this.products.filter(p=> p.name.includes(value));
    this.pagenumbermax = Math.ceil(productS.length / 9);
    this.lenghtProduct = productS.length;
    this.productShow = this.getData(this.pagenumber,productS);
  }

  changepage(){
    if(this.pagenumber <= 0 || this.pagenumber == null){
      this.pagenumber = 1;
    }else if(this.pagenumber > this.pagenumbermax)
    {
      this.pagenumber = this.pagenumbermax;
    }
    this.productShow = this.getData(this.pagenumber,this.products);
  }

  getData(page: number, products: ProductAPI4[]): ProductAPI4[] {
    const startIndex = (page - 1) * 9;
    const endIndex = startIndex + 9;
    return products.slice(startIndex, endIndex);
  }

  pluspage(){
    this.pagenumber+=1;
    if(this.pagenumber > this.pagenumbermax)
    {
      this.pagenumber = this.pagenumbermax;
    }
    this.productShow = this.getData(this.pagenumber,this.products);
  }

  minuspage(){
    this.pagenumber-=1;
    if(this.pagenumber <=0 )
    {
      this.pagenumber = 1
    }
    this.productShow = this.getData(this.pagenumber,this.products);
  }
}
