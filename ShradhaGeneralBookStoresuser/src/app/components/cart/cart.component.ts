import { Component,OnInit } from "@angular/core";
import { CartService } from "src/app/Service/cart.service";
import { Cart } from "src/app/models/cart.model";

@Component({
    selector: 'app-root',
    templateUrl: './cart.component.html'
})
export class CartsComponent implements OnInit{
    total:number = 0;
    cart: Cart = new Cart();

    constructor(
      private cartService:CartService
    ){}

    ngOnInit(): void {
      if(JSON.parse(sessionStorage.getItem('cart')) as Cart){
        this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
        for(let i = 0; i < this.cart.listItemCart.length; i++){
          this.total += this.cart.listItemCart[i].quantity * this.cart.listItemCart[i].cost;
        }
      }else{
        this.cart = null;
      }
    }

    minusquantity(id: number){
      if(this.cartService.minus(id) > 0){
        this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
      }else{
        if(confirm('Are you sure to delete this ?')){
          this.cartService.deleted(id);
          this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
          this.total = 0;
          for(let i = 0; i < this.cart.listItemCart.length; i++){
            this.total += this.cart.listItemCart[i].quantity * this.cart.listItemCart[i].cost;
          }
          this.ngOnInit();
        }
      };
    }

    plusquantity(id: number){
      this.cartService.plus(id);
      this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
      this.total = 0;
          for(let i = 0; i < this.cart.listItemCart.length; i++){
            this.total += this.cart.listItemCart[i].quantity * this.cart.listItemCart[i].cost;
          }
    }
    clearcart(){
      this.cartService.clear();
      console.log(this.cart);
      this.ngOnInit();
    }
}
