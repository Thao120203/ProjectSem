import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/models/category.model';
import { CategoryMenuParent } from 'src/app/models/categoryMenuParent.model';
import { CategoryMenuSub } from 'src/app/models/categoryMenuSub.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  categories:Category[] = [];
  categoriesTitle: CategoryMenuParent[] = [];
  categoriesTitleSub: CategoryMenuSub[] = [];

  constructor(
    private _categoryService: CategoryService,
    private router: Router
  ){}

  ngOnInit(): void {
    let parent = 0;

    this._categoryService.read().then(result => {
      this.categories = result as Category[];
      for(let i = 0; i< this.categories.length; i++){
        if(this.categories[i].parentId == null){
          let a = new CategoryMenuParent(this.categories[i],i);
          this.categoriesTitle.push(a);
          parent = i;
        }else{
          let a = new CategoryMenuSub(this.categories[i],i,parent);
          this.categoriesTitleSub.push(a);
        }
      }
    });
  }

  getCategoriesSub(): Category[] {
    return null;
  }

}
