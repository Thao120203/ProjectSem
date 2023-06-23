import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/models/category.model';


@Component({
  selector: 'app-root',
  templateUrl: './addCategory.component.html',
})
export class AddCategoryComponent implements OnInit {
  categories: Category[];
  parentid: number;
  name: string;
  constructor(
    private _categoryService: CategoryService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this._categoryService.read().then(result=>{
      this.categories = result as Category[];
    },
    error=>{

    })
  }
  save(){
    let category = new Category();
    category.name = this.name;
    category.parentId = this.parentid;
    category.createdAt  = moment().format("DD/MM/YYYY HH:mm:ss");
    category.updatedAt  = moment().format("DD/MM/YYYY HH:mm:ss");

    this._categoryService.create(category).then(result=>{
      if(result as true){
        alert("THanhf cong");
      }
    })
    console.dir(category);
  }
}
