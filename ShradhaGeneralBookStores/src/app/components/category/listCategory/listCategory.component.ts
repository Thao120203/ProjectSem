import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/models/category.model';


@Component({
  selector: 'app-root',
  templateUrl: './listCategory.component.html',
  providers: [MessageService, ConfirmationService]
})
export class ListCategoryComponent implements OnInit {
  categories: Category[];
  first = 0;
  rows = 10;
  check: boolean = false;
  selectedCategory!: Category[] | null;
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
  deleted(id: number){
    if(confirm('Are you sure you want to delete')){
      this._categoryService.delete(id).then(result=>{
        if(result as boolean){
          alert('Deleted');
          this.ngOnInit();
        }
        else{
          alert('Cannot delete');
        }
      });
    }

  }
  deleteSelected() {
    console.log(this.selectedCategory);
    if (confirm('Are you sure you want to delete')) {
      for (let i = 0; i < this.selectedCategory.length; i++) {
        this._categoryService.delete(this.selectedCategory[i].id).then(result => {
          if (result as boolean) {
            this.check = true;
            this.selectedCategory = [];
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
