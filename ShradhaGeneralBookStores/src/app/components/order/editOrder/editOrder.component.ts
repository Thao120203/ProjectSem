import { UtilsServiceService } from './../../../../../../ShradhaGeneralBookStoresuser/src/app/Service/utils-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { OrderStatus } from 'src/app/models/orderstatus.model';
import { OrderApi2 } from 'src/app/modelapi/orderapi2.model';
import { OrderService } from 'src/app/Service/order.service';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-root',
  templateUrl: './editOrder.component.html',
})
export class EditOrderComponent implements OnInit {
  orderstatus: OrderStatus[] = [];
  order: Order;

  cities: any[];
  OrderFormGroup: FormGroup;
  constructor(
    private utils: UtilsServiceService,
    private _orderStatusService: OrderStatusService,
    private _orderService: OrderService,
    private activevateRoute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.activevateRoute.paramMap.subscribe((c) => {
      this._orderService.getByOrderId(parseInt(c.get('id'))).then((result) => {
        this.order = result[0] as Order;
        this._orderStatusService.read().then((result) => {
          console.log(this.order);
          let a = result as OrderStatus[];
          switch (this.order.statusId) {
            case 1:
              for (const orderItem of a) {
                if (orderItem.id >= 2 && orderItem.id <= 8) {
                  this.orderstatus.push(orderItem);
                }
              }
              break;
            case 2:
              for (const orderItem of a) {
                if (
                  orderItem.id === 3 ||
                  orderItem.id === 4 ||
                  orderItem.id === 5 ||
                  orderItem.id === 7 ||
                  orderItem.id === 8
                ) {
                  this.orderstatus.push(orderItem);
                }
              }
              break;
            case 3:
              for (const orderItem of a) {
                if (
                  orderItem.id === 4 ||
                  orderItem.id === 5 ||
                  orderItem.id === 7 ||
                  orderItem.id === 8
                ) {
                  this.orderstatus.push(orderItem);
                }
              }
              break;
            case 4:
              for (const orderItem of a) {
                if (
                  orderItem.id === 5 ||
                  orderItem.id === 7 ||
                  orderItem.id === 8
                ) {
                  this.orderstatus.push(orderItem);
                }
              }
              break;
            case 7:
              for (const orderItem of a) {
                if (orderItem.id === 8) {
                  this.orderstatus.push(orderItem);
                }
              }
              break;

            case 9:
              for (const orderItem of a) {
                if (
                  orderItem.id === 10 ||
                  orderItem.id === 11 ||
                  orderItem.id === 12 ||
                  orderItem.id === 5 ||
                  orderItem.id === 13 ||
                  orderItem.id === 14
                ) {
                  this.orderstatus.push(orderItem);
                }
              }
              break;
            case 10:
              for (const orderItem of a) {
                if (
                  orderItem.id === 11 ||
                  orderItem.id === 12 ||
                  orderItem.id === 5 ||
                  orderItem.id === 13 ||
                  orderItem.id === 14
                ) {
                  this.orderstatus.push(orderItem);
                }
              }
              break;
            case 11:
              for (const orderItem of a) {
                if (
                  orderItem.id === 5 ||
                  orderItem.id === 13 ||
                  orderItem.id === 14
                ) {
                  this.orderstatus.push(orderItem);
                }
              }
              break;
            default:
              // Xử lý khi không khớp với bất kỳ trạng thái nào
              break;
          }
          this.OrderFormGroup.get('statusId').setValue(this.order.statusId);
        });


      });
    });
    this.OrderFormGroup = this.formbuilder.group({
      accountId: [''],
      totalPrice: [''],
      statusId: [, [Validators.required]],
      addressId: [''],
      voucherId: [''],
      paymentMethodId: [''],
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
    });
  }

  save() {
    this.order.statusId = this.OrderFormGroup.get('statusId').value.id;
    let order: Order = {
      id: this.order.id,
      accountId: this.order.accountId,
      totalPrice: this.order.totalPrice,
      statusId: this.order.statusId,
      addressId: this.order.addressId,
      voucherId: this.order.voucherId,
      paymentMethodId: this.order.paymentMethodId,
      createdAt: this.order.createdAt,
      updatedAt: this.order.updatedAt
    };
    this._orderService.update(order).then((result) => {
      if (result as true) {
        this.utils.updateToast('Success');
        this.router.navigate(['listorder']);
      }
    });
    console.dir(this.order);
  }

  reset() {
    this.ngOnInit();
  }
}
