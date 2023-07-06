import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import moment from "moment";
import { AuthorService } from "src/app/Service/author.service";
import { CategoryService } from "src/app/Service/category.service";
import { ProductService } from "src/app/Service/product.service";
import { ProductImageService } from "src/app/Service/productimage.service";
import { PublisherService } from "src/app/Service/publisher.service";
import { ProductAPI } from "src/app/modelapi/productapi.model";
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
    photos: File[];
    photo: File;

  constructor(
    private _categoryService: CategoryService,
    private _authorService: AuthorService,
    private _productService: ProductService,
    private _publisherService: PublisherService,
    private _productImageService: ProductImageService,

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
      let product = this.productFormGroup.value as ProductAPI;


      this._productService.add(product).then(result=>{
          this._productImageService.create(result as number,this.photos).then(result=>{
            if(result as boolean){
              alert('thêm thành thụ');
            }
          })
      })
      console.log(this.productFormGroup.value);
      console.dir(this.photos);
    }

    reset(){
      this.ngOnInit();
    }

    selectFile(event: any){
      this.photos = [];
      for(let i = 0; i < event.length; i++){
        this.photos.push(event[i]);

      }
    }
    change(){
        console.dir(this.productFormGroup.value);
    }

}
