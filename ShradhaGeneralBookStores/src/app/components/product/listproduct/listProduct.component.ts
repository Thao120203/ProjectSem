import { Account } from 'src/app/models/account.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/models/category.model';
import { AccountService } from 'src/app/Service/account.service';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/Service/role.service';
import { AccountAPI2 } from 'src/app/modelapi/accountapi2.model';
import { ProductAPI2 } from 'src/app/modelapi/productapi2.model';
import { ProductService } from 'src/app/Service/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './listProduct.component.html',
})
export class ListProductComponent implements OnInit {
  products: ProductAPI2[];
  constructor(
    private _productService: ProductService,
    private formbuilder: FormBuilder,
    private router: Router,
    private _roleService: RoleService,
  ) {}
  ngOnInit() {
    this._productService.read().then(result=>{
      this.products = result as ProductAPI2[];
      console.log(this.products);
    },
    error=>{
      console.log(error);
    })
  }
  deleted(id: number){


  }

}
