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
import { Author } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/Service/author.service';
import { Publisher } from 'src/app/models/publisher.model';
import { PublisherService } from 'src/app/Service/publisher.service';
import { SendDataCartService } from 'src/app/Service/senddatacart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  account: AccountAPI2;
  categories:Category[] = [];
  authors: Author[];
  publishers: Publisher[];
  categoriesTitle: CategoryMenuParent[] = [];
  categoriesTitleSub: CategoryMenuSub[] = [];
  cart: Cart;

  private reloadSubscription: Subscription;
  constructor(
    private _categoryService: CategoryService,
    private _authorService:AuthorService,
    private _publisherService:PublisherService,
    private router: Router,
    private reloadService: ReloadService,
    private sendService: SendService,
    private sendDataCartService: SendDataCartService
  ){

  }

  ngOnInit(): void {
    this.sendService.data$.subscribe(newData => {
      this.account = newData;
    });
    if(this.account == null){
      this.account = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
    }

    this.sendDataCartService.data$.subscribe(newData => {
      this.cart = newData;
    });
    if(this.cart == null){
      this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
    }

    let parent = 0;
    // this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;

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

    this._authorService.readfomenu().then(
      result=>{
        this.authors = result as Author[];
      }
    );

    this._publisherService.readformenu().then(
      result=>{
        this.publishers = result as Publisher[];
      }
    )


  }

  getCategoriesSub(): Category[] {
    return null;
  }

  ngOnDestroy() {
    // Hủy đăng ký khi component bị hủy
    this.reloadSubscription.unsubscribe();
  }

  logout(){
    sessionStorage.removeItem('account');
    localStorage.clear();
    this.sendService.changeData(null);
    this.router.navigate(['login']);
  }
}
