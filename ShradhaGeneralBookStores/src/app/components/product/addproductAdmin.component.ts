import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import moment from "moment";
import { AuthorService } from "src/app/Service/author.service";
import { CategoryService } from "src/app/Service/category.service";
import { ProductService } from "src/app/Service/product.service";
import { PublisherService } from "src/app/Service/publisher.service";
import { Author } from "src/app/models/author.model";
import { Category } from "src/app/models/category.model";
import { Product } from "src/app/models/product.model";
import { Publisher } from "src/app/models/publisher.model";

@Component({
    
    templateUrl: './addproductAdmin.component.html'
})
export class AddProductAdminComponent implements OnInit{
    productFormGroup: FormGroup;
    selectedFile: File[];
    categories: Category[];
    authors: Author[];
    publishers: Publisher[];
  constructor(
    private _categoryService: CategoryService,
    private _authorService: AuthorService,
    private _productService: ProductService,
    private _publisherService: PublisherService,
    
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {
        this._categoryService.read().then(result=>{
            this.categories = result as Category[];
          })

          this._authorService.read().then(result=>{
            this.authors = result as Author[];
          })

          this._publisherService.read().then(result=>{
            this.publishers = result as Publisher[];
          })
      this.productFormGroup = this.formbuilder.group({
        name:['',[
          Validators.required
        ]],
        description: [''],
        quantity: 0,
        price: 0,
        cost: 0,
        status: false,
        hot: false,
        publisherId: [''],
        authorsId: [''],
        categoriesId: [''],
        publishingYear: [''],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let product = this.productFormGroup.value as Product;
      this._productService.create(product).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }

    selectFile(event: any){
        this.selectedFile = event[0];
    }

    change(){
        console.dir(this.productFormGroup.value);
    }

}