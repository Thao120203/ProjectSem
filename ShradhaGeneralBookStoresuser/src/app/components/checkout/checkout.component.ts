import { SendDataCartService } from 'src/app/Service/senddatacart.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { ICreateOrderRequest, IPayPalConfig } from "ngx-paypal";
import { AddressProfileService } from "src/app/Service/addressprofile.service";
import { OrderService } from "src/app/Service/order.service";
import { AccountAPI2 } from "src/app/modelapi/accountapi2.model";
import { OrderApi } from "src/app/modelapi/orderapi.model";
import { AddressProfile } from "src/app/models/addressprofile.model";
import { Cart } from "src/app/models/cart.model";
import { Order } from "src/app/models/order.model";
import { OrderDetail } from "src/app/models/orderdetail.model";
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  account: AccountAPI2 = new AccountAPI2();
  accountFormGroup: FormGroup;
  changepassFormGruop: FormGroup;
  comfirmpass: string;
  check: boolean = true;
  address: AddressProfile[];
  addressid: number;
  imageUrl: string;
  cart: Cart;
  avatar: File = null;
  ship: number;
  totaltemp: number = 0;
  paymentmethod: number = 1;
  public payPalConfig?: IPayPalConfig;
  public showSuccess: boolean = false;
  constructor(
    private addressProfileService: AddressProfileService,
    private _orderService : OrderService,
    private router:Router,
    private _sendatacart:SendDataCartService,
    private _cartService:CartService
  ) { }

  ngOnInit(): void {
    this.account = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
    this.cart = JSON.parse(sessionStorage.getItem('cart')) as Cart;
    this.addressProfileService.read().then(
      result => {
        this.address = result as AddressProfile[];
        this.address = this.address.filter(a => a.accountId == this.account.id);
      }
    );
    for (let i = 0; i < this.cart.listItemCart.length; i++) {
      this.totaltemp += this.cart.listItemCart[i].cost * this.cart.listItemCart[i].quantity;
    }
    // this.initConfig();

  }
  setship(address: AddressProfile) {
    this.ship = (address.city == "Hồ Chí Minh") ? 1 : 2;
    if (this.totaltemp > 50) {
      this.ship = 0;
    }
  }
  cod() {
    this.paymentmethod = 1;
  }
  paypal() {
    this.paymentmethod = 2;
  }

  save(){
    let order = new OrderApi();
    order.accountId = this.account.id;
    order.totalPrice = this.totaltemp + this.ship + (this.totaltemp*10)/100;
    order.statusId = 1;
    order.addressId = this.addressid;
    order.voucherId = 1;
    order.paymentMethodId = this.paymentmethod;
    order.listOrderDetail = [];

    for (let i = 0 ; i < this.cart.listItemCart.length; i++) {
      let orderDetail = new OrderDetail();
      orderDetail.orderId = 0;
      orderDetail.price = this.cart.listItemCart[i].cost;
      orderDetail.quantity = this.cart.listItemCart[i].quantity;
      orderDetail.productId = this.cart.listItemCart[i].id;
      orderDetail.createdAt =  moment().format('DD/MM/YYYY HH:mm:ss');
      orderDetail.updatedAt =  moment().format('DD/MM/YYYY HH:mm:ss');
      order.listOrderDetail.push(orderDetail);
    }
    if(this.paymentmethod == 2){
      order.statusId = 15;
    }
    this._orderService.create(order).then(
      result=>{
        if(result as number != -1){
          if(this.paymentmethod == 1){
            this._cartService.clear();
            this._sendatacart.changeData(null);
            this.router.navigate(['']);
          }else{
            this._cartService.clear();
            this._sendatacart.changeData(null);
            this.router.navigate(['checkoutpay',{id: result}])
          }
        }
      }
    );

  }



  //paypal
  // private initConfig(): void {
  //   this.payPalConfig = {
  //     currency: 'USD',
  //     clientId: 'AWPpsYUeCMez1g0T20K5pLpGSTsj-ZhA0YaRSsg6BM5CtP8_t1PfP7VFvC9P-6hjDechCZ_ruR7gy6wO',
  //     createOrderOnClient: (data) => <ICreateOrderRequest>{
  //       intent: 'CAPTURE',
  //       purchase_units: [
  //         {
  //           amount: {
  //             currency_code: 'USD',
  //             value: '9.99',
  //             breakdown: {
  //               item_total: {
  //                 currency_code: 'USD',
  //                 value: '9.99'
  //               }
  //             }
  //           },
  //           items: [
  //             {
  //               name: 'Enterprise Subscription',
  //               quantity: '1',
  //               category: 'DIGITAL_GOODS',
  //               unit_amount: {
  //                 currency_code: 'USD',
  //                 value: '9.99',
  //               },
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     advanced: {
  //       commit: 'true'
  //     },
  //     style: {
  //       label: 'paypal',
  //       layout: 'vertical'
  //     },
  //     onApprove: (data, actions) => {
  //       console.log('onApprove - transaction was approved, but not authorized', data, actions);
  //       actions.order.get().then(details => {
  //         console.log('onApprove - you can get full order details inside onApprove: ', details);
  //       });
  //     },
  //     onClientAuthorization: (data) => {
  //       console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
  //       this.showSuccess = true;
  //       alert('Thành công r mày');
  //     },
  //     onCancel: (data, actions) => {
  //       console.log('OnCancel', data, actions);
  //     },
  //     onError: err => {
  //       console.log('OnError', err);
  //     },
  //     onClick: (data, actions) => {
  //       console.log('onClick', data, actions);
  //     },
  //   };
  // }

}
