import { Order } from '../models/order.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { Cart } from '../models/cart.model';
import { ProductAPI4 } from '../modelapi/productapi4.model';
import { ItemCart } from '../models/cartItem.model';

@Injectable()
export class CartService {
  constructor(
    private baseUrlservice: BaseURLService,
    private httpclient: HttpClient
  ){}

  public create(){
    let cart = new Cart();
    cart.id = this.generateRandomString(10);
    cart.listItemCart = [];
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }

  public add(product: ProductAPI4){
    let cart =  JSON.parse(sessionStorage.getItem('cart')) as Cart;
    if(cart == null){
      this.create();
      cart =  JSON.parse(sessionStorage.getItem('cart')) as Cart;
    }
    if( cart.listItemCart.find(p=>p.id == product.id) == null){
      let itemcart = new ItemCart();
      itemcart.id = product.id;
      itemcart.name = product.name;
      itemcart.quantity = 1;
      itemcart.cost = product.cost;
      itemcart.photoPath = product.photos[0];
      cart.listItemCart.push(itemcart);
    }else{
      cart.listItemCart.find(p=>p.id == product.id).quantity +=1;
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }


  public plus(id: number):number {
    let cart =  JSON.parse(sessionStorage.getItem('cart')) as Cart;
    cart.listItemCart.find(p=>p.id == id).quantity +=1;
    sessionStorage.setItem('cart', JSON.stringify(cart));
    return cart.listItemCart.find(p=>p.id == id).quantity;
  }

  public minus(id: number): number {
    let cart =  JSON.parse(sessionStorage.getItem('cart')) as Cart;
    cart.listItemCart.find(p=>p.id == id).quantity -=1;
    sessionStorage.setItem('cart', JSON.stringify(cart));
    return cart.listItemCart.find(p=>p.id == id).quantity;
  }

  public deleted(id: number){
    let cart =  JSON.parse(sessionStorage.getItem('cart')) as Cart;
    cart.listItemCart = cart.listItemCart.filter(p=>p.id != id);
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }

  public clear(){
    let cart =  JSON.parse(sessionStorage.getItem('cart')) as Cart;
    cart.listItemCart = [];
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }


  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

}
