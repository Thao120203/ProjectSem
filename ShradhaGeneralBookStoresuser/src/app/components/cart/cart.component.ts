import { SendDataCartService } from 'src/app/Service/senddatacart.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { Cart } from 'src/app/models/cart.model';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import { ProductAPI3 } from 'src/app/modelapi/productapi3.model';
import { ItemCart } from 'src/app/models/cartItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './cart.component.html',
})
export class CartsComponent implements OnInit {
  total: number = 0;
  cart: Cart = new Cart();

  constructor(
    private cartService: CartService,
    private _sendDataCartService: SendDataCartService,
    private router: Router,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    if (JSON.parse(sessionStorage.getItem('cart')) as Cart) {
      this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
      for (let i = 0; i < this.cart.listItemCart.length; i++) {
        this.total +=
          this.cart.listItemCart[i].quantity * this.cart.listItemCart[i].cost;
      }
    } else {
      this.cart = null;
    }
  }

  change(id: number) {
    let a = this.cart.listItemCart.find((c) => c.id == id) as ItemCart;
    if (a.quantity > 0 && a.quantity <= a.limit) {
      this.cartService.change(id, a.quantity);
      this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
      this.total = 0;
      for (let i = 0; i < this.cart.listItemCart.length; i++) {
        this.total +=
          this.cart.listItemCart[i].quantity * this.cart.listItemCart[i].cost;
      }

    } else if (a.quantity <= 0) {
      this.cartService.deleted(id);
      this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
      this.total = 0;
      for (let i = 0; i < this.cart.listItemCart.length; i++) {
        this.total +=
          this.cart.listItemCart[i].quantity * this.cart.listItemCart[i].cost;
      }
    } else if (a.quantity >= a.limit) {
      this.cartService.change(id, a.limit);
      this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
      this.total = 0;
      for (let i = 0; i < this.cart.listItemCart.length; i++) {
        this.total +=
          this.cart.listItemCart[i].quantity * this.cart.listItemCart[i].cost;
      }
    }
  }

  minusquantity(id: number) {
    if (this.cartService.minus(id) > 0) {
      this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
      this.total = 0;
      for (let i = 0; i < this.cart.listItemCart.length; i++) {
        this.total +=
          this.cart.listItemCart[i].quantity * this.cart.listItemCart[i].cost;
      }
    } else {
      if (confirm('Are you sure to delete this ?')) {
        this.cartService.deleted(id);
        this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
        this.total = 0;
        for (let i = 0; i < this.cart.listItemCart.length; i++) {
          this.total +=
            this.cart.listItemCart[i].quantity * this.cart.listItemCart[i].cost;
        }
        this.ngOnInit();
      }
    }
  }

  plusquantity(id: number) {
    this.cartService.plus(id);
    this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
    this.total = 0;
    for (let i = 0; i < this.cart.listItemCart.length; i++) {
      this.total +=
        this.cart.listItemCart[i].quantity * this.cart.listItemCart[i].cost;
    }
  }
  clearcart() {
    this.cartService.clear();
    this._sendDataCartService.changeData(null);
    this.ngOnInit();
  }

  checkout() {
    if (this.total > 0) {
      this.router.navigate(['checkout']);
    } else {
      alert('Cart is null');
    }
  }
}
