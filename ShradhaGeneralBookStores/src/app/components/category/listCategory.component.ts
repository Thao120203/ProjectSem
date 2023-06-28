import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/models/category.model';


@Component({
  selector: 'app-root',
  templateUrl: './listCategory.component.html',
})
export class ListCategoryComponent implements OnInit {
  categories: Category[];
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
  
}
