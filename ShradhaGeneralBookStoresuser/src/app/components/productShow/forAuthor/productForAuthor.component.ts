import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from 'src/app/Service/author.service';
import { CartService } from 'src/app/Service/cart.service';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductService } from 'src/app/Service/product.service';
import { SendDataCartService } from 'src/app/Service/senddatacart.service';
import { ProductAPI2 } from 'src/app/modelapi/productapi2.model';
import { ProductAPI4 } from 'src/app/modelapi/productapi4.model';
import { Author } from 'src/app/models/author.model';
import { Cart } from 'src/app/models/cart.model';
import { Category } from 'src/app/models/category.model';
import { CategoryMenuParent } from 'src/app/models/categoryMenuParent.model';
import { CategoryMenuSub } from 'src/app/models/categoryMenuSub.model';

@Component({
  selector: 'app-root',
  templateUrl: './productForAuthor.component.html',
})
export class ProductForAuthorComponent implements OnInit {
  products: ProductAPI4[];
  productshow: ProductAPI4[];

  authors: Author[];
  author: Author;
  categories: Category[] = [];
  categoriesTitle: CategoryMenuParent[] = [];
  categoriesTitleSub: CategoryMenuSub[] = [];
  rangeValues: number[] = [0, 20];
  constructor(
    private _cartService: CartService,
    private _productService: ProductService,
    private activevateRoute: ActivatedRoute,
    private _categoryService: CategoryService,
    private _authorService: AuthorService,
    private sendDataCartService: SendDataCartService

  ) {}
  ngOnInit(): void {
    this.productshow = [];
    this.activevateRoute.paramMap.subscribe((c) => {
      if (c.get('id') != '0') {
        //get product
        this._productService
          .readforauthorforUser(c.get('id'))
          .then((result) => {
            this.products = result as ProductAPI4[];
            this.productshow = this.products;
          });

        //get author
        this._authorService.get(parseInt(c.get('id'))).then((result) => {
          this.author = result[0] as Author;
          console.log(this.author);
        });
      } else {
        //read product not id
        this._productService.readforuser().then(
          (result) => {
            this.products = result as ProductAPI4[];
          },
          (error) => {
            console.log(error);
          }
        );
      }
      this._authorService.read().then(
        (result) => {
          this.authors = result as Author[];
        },
        (error) => {}
      );
    });

    let parent = 0;
    this._categoryService.read().then((result) => {
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
    this.sendDataCartService.changeData(this._cartService.add(product) as Cart)
  }

  sortbyoder(evt: any) {
    let value = evt.target.value;
  }
  rangePrice() {
    this.productshow = this.products.filter(p => p.cost >= this.rangeValues[0] &&  this.rangeValues[1]);
  }
}
