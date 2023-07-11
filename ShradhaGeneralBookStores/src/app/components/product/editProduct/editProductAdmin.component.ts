import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import moment from "moment";
import { AuthorService } from "src/app/Service/author.service";
import { CategoryService } from "src/app/Service/category.service";
import { ProductService } from "src/app/Service/product.service";
import { ProductImageService } from "src/app/Service/productimage.service";
import { PublisherService } from "src/app/Service/publisher.service";
import { ProductAPI } from "src/app/modelapi/productapi.model";
import { ProductAPI3 } from "src/app/modelapi/productapi3.model";
import { Author } from "src/app/models/author.model";
import { Category } from "src/app/models/category.model";
import { Product } from "src/app/models/product.model";
import { Publisher } from "src/app/models/publisher.model";

@Component({

    templateUrl: './editProductAdmin.component.html'
})
export class EditProductAdminComponent implements OnInit{
    productFormGroup: FormGroup;
    selectedFile: File[];
    categories: Category[];
    authors: Author[];
    publishers: Publisher[];
    product: ProductAPI3 = new ProductAPI3();
    photos: File[];
    photo: File;

  constructor(
    private _categoryService: CategoryService,
    private _authorService: AuthorService,
    private _productService: ProductService,
    private _publisherService: PublisherService,
    private _productImageService: ProductImageService,
    private activevateRoute:ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {
       //get data for form group
       this.activevateRoute.paramMap.subscribe(c=>{
        var id = parseInt(c.get('id'));
        this.product.id = id;
        this._productService.get(id).then(result=>{
          this.product = result[0] as ProductAPI3;
          console.log(this.productFormGroup)
          console.log(this.product.photos)
          //set value from
          this.productFormGroup.get('id').setValue(this.product.id);
          this.productFormGroup.get('name').setValue(this.product.name);
          this.productFormGroup.get('description').setValue(this.product.description);
          this.productFormGroup.get('quantity').setValue(this.product.quantity);
          this.productFormGroup.get('price').setValue(this.product.price);
          this.productFormGroup.get('cost').setValue(this.product.cost);
          this.productFormGroup.get('status').setValue(this.product.status);
          this.productFormGroup.get('hot').setValue(this.product.hot);
          this.productFormGroup.get('publisherId').setValue(this.product.publisherId);
          this.productFormGroup.get('authorsId').setValue(this.product.authorsId);
          this.productFormGroup.get('categoriesId').setValue(this.product.categoriesId);
          this.productFormGroup.get('publishingYear').setValue(this.product.publishingYear);
          this.productFormGroup.get('createdAt').setValue(this.product.createdAt);
          this.productFormGroup.get('updatedAt').setValue(this.product.updatedAt);
        })
      });


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
        id:[''],
        name:['',[
          Validators.required
        ]],
        description: [''],
        quantity: ['',[
          Validators.required
        ]],
        price: [0,[
          Validators.required
        ]],
        cost: ['',[
          Validators.required
        ]],
        status: false,
        hot: false,
        publisherId: ['',[
          Validators.required
        ]],
        authorsId: ['',[
          Validators.required
        ]],
        categoriesId: ['',[
          Validators.required
        ]],
        publishingYear: ['',[
          Validators.required
        ]],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let product = this.productFormGroup.value as ProductAPI;


      this._productService.update(product).then(result=>{
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
