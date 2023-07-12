import { ReloadService } from './../../Service/reload.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/Service/category.service';
import { Cart } from 'src/app/models/cart.model';
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
  cart: Cart;
  private reloadSubscription: Subscription;
  constructor(
    private _categoryService: CategoryService,
    private router: Router,
    private reloadService: ReloadService
  ){
    this.reloadSubscription = this.reloadService
      .getReloadObservable()
      .subscribe(() => {
        // Thực hiện reload ở đây
        window.location.reload();
      });
  }

  ngOnInit(): void {
    let parent = 0;
    this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;

    //set menu
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
