import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig, ITransactionItem } from 'ngx-paypal';
import { OrderService } from 'src/app/Service/order.service';
import { OrderServiceDetail } from 'src/app/Service/orderdetail.service';
import { OrderApi2 } from 'src/app/modelapi/orderapi2.model';
import { OrderDetailAPI } from 'src/app/modelapi/orderdetailapi.model';

@Component({
  selector: 'app-root',
  templateUrl: './checkoutpay.component.html',
})

export class CheckOutPayComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean = false;
  order: OrderApi2;
  listorderDetail: OrderDetailAPI[];
  total: number = 0;
  items: ITransactionItem[] = [];
  constructor(
    private activevateRoute: ActivatedRoute,
    private router: Router,
    private _orderService: OrderService,
    private _orderDetailService: OrderServiceDetail
  ) { }
  ngOnInit(): void {
    this.activevateRoute.paramMap.subscribe((c) => {
      this._orderService.getByOrderId(parseInt(c.get('id'))).then(
        result => {
          this.order = result[0] as OrderApi2;
          console.log(this.order)
        }
      )
      this._orderDetailService.get(parseInt(c.get('id'))).then(
        result => {
          this.listorderDetail = result as OrderDetailAPI[];
          for (let i = 0; i < this.listorderDetail.length; i++) {
            this.total += this.listorderDetail[i].price * this.listorderDetail[i].quantity;
            let a: ITransactionItem = {
              name: this.listorderDetail[i].name,
              quantity: this.listorderDetail[i].quantity.toString(),
              unit_amount: {
                currency_code: 'USD',
                value: (this.listorderDetail[i].price * this.listorderDetail[i].quantity).toString()
              }
            };
            this.items.push(a);
            console.log(a);
            console.log((this.order.totalPrice));

          }
          // if(Number.isInteger(this.order.totalPrice - this.total)){
          let a: ITransactionItem = {
            name: 'shipt',
            quantity: '1',
            unit_amount: {
              currency_code: 'USD',
              value: (this.order.totalPrice - this.total).toString()
            }
          };
          this.items.push(a);
          console.log(this.items);
          // }else{
          //   let a:ITransactionItem = {
          //     name: 'shipt & vat',
          //       quantity:  '1',
          //       unit_amount:{
          //         currency_code: 'USD',
          //         value: (this.order.totalPrice - this.total).toFixed(1).toString()
          //       }
          //   };
          //   this.items.push(a);
          //   console.log(this.items);
          // }
        }
      );
    })
    this.initConfig();
  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId:
        'AWPpsYUeCMez1g0T20K5pLpGSTsj-ZhA0YaRSsg6BM5CtP8_t1PfP7VFvC9P-6hjDechCZ_ruR7gy6wO',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: this.order.totalPrice.toString(),
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: this.order.totalPrice.toString(),
                  },
                },
              },
              items: [
                {
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'USD',
                    value:  this.order.totalPrice.toString(),
                  },
                }
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
        this.activevateRoute.paramMap.subscribe((c) => {
          this._orderService.paid(parseInt(c.get('id')));
        });
        this.showSuccess = true;
        alert('Paid Successfully');
        this.router.navigate(['']);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
// interface ITransactionItem {
//   id: number;
//   name: string;
//   quantity: number;
//   price: number;
//   category:string;
//   unit_amount: {
//     currency_code: string,
//     value: string,
//   }
// }



