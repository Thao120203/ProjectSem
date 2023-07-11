import { Account } from 'src/app/models/account.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/models/category.model';
import { AccountService } from 'src/app/Service/account.service';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/Service/role.service';
import { AccountAPI2 } from 'src/app/modelapi/accountapi2.model';
import { ProductAPI2 } from 'src/app/modelapi/productapi2.model';
import { ProductService } from 'src/app/Service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './listProductForAuthor.component.html',
  providers: [MessageService, ConfirmationService]
})
export class ListProductForAuthorComponent implements OnInit {
  products: ProductAPI2[];
  first = 0;
  rows = 10;
  check: boolean = false;
  selectedProduct!: Product[] | null;
  constructor(
    private _productService: ProductService,
    private formbuilder: FormBuilder,
    private router: Router,
    private activevateRoute:ActivatedRoute,
    private _roleService: RoleService,
  ) {}
  ngOnInit() {
    this.activevateRoute.paramMap.subscribe(c=>{
      this._productService.readforauthor(c.get('id')).then(result=>{
        this.products = result as ProductAPI2[];
        console.log(this.products);
      },
      error=>{
        console.log(error);
      })
    });

  }
  deleted(id: number){


  }
  deleteSelected() {
    console.log(this.selectedProduct);
    if (confirm('Are you sure you want to delete')) {
      for (let i = 0; i < this.selectedProduct.length; i++) {
        this._productService.delete(this.selectedProduct[i].id).then(result => {
          if (result as boolean) {
            this.check = true;
            this.selectedProduct = [];
            this.ngOnInit();
          }
          else {
            alert('Cannot delete');
          }
        });
      }
      if (this.check)
        alert('Deleted');
    }
  }
}
