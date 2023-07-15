import { ReloadService } from './../../Service/reload.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/Service/category.service';
import { AccountAPI2 } from 'src/app/modelapi/accountapi2.model';
import { Cart } from 'src/app/models/cart.model';
import { Category } from 'src/app/models/category.model';
import { CategoryMenuParent } from 'src/app/models/categoryMenuParent.model';
import { CategoryMenuSub } from 'src/app/models/categoryMenuSub.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SendService } from 'src/app/Service/send.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  account: AccountAPI2;
  categories:Category[] = [];
  categoriesTitle: CategoryMenuParent[] = [];
  categoriesTitleSub: CategoryMenuSub[] = [];
  cart: Cart;

  private reloadSubscription: Subscription;
  constructor(
    private _categoryService: CategoryService,
    private router: Router,
    private reloadService: ReloadService,
    private sendService: SendService
  ){

  }

  ngOnInit(): void {
    this.sendService.data$.subscribe(newData => {
      this.account = newData;
    });
    let parent = 0;
    this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;

    // this.account = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
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
    this.reloadSubscription = this.reloadService
    .getReloadObservable()
    .subscribe(() => {
      // Thực hiện reload ở đây
      window.location.reload();
    });
  }

  getCategoriesSub(): Category[] {
    return null;
  }

  ngOnDestroy() {
    // Hủy đăng ký khi component bị hủy
    this.reloadSubscription.unsubscribe();
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.sendService.changeData(null);
    this.router.navigate(['login']);
  }
}
