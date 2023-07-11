import { OrderStatus } from '../../../models/orderstatus.model';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Order } from 'src/app/modelapi/orderapi.model';
import { OrderService } from 'src/app/Service/order.service';


@Component({
  selector: 'app-root',
  templateUrl: './listOrder.component.html',
  providers: [MessageService, ConfirmationService]
})

export class ListOrderComponent implements OnInit {

  orders: Order[];
  first = 0;
  rows = 10;
  check: boolean = false;
  selectedOrder!: Order[] | null;
  constructor(
    private _oderService: OrderService,
    private formbuilder: FormBuilder,
    private router: Router
  ) { }
  ngOnInit(): void {
    this._oderService.read().then(result => {
      this.orders = result as Order[];
    },
      error => {

      })
  }

  deleted(id: number) {
    if (confirm('Are you sure you want to delete')) {
      this._oderService.delete(id).then(result => {
        if (result as boolean) {
          alert('Deleted');
          this.ngOnInit();
        }
        else {
          alert('Cannot delete');
        }
      });
    }

  }
  deleteSelected() {
    console.log(this.selectedOrder);
    if (confirm('Are you sure you want to delete')) {
      for (let i = 0; i < this.selectedOrder.length; i++) {
        this._oderService.delete(this.selectedOrder[i].id).then(result => {
          if (result as boolean) {
            this.check = true;
            this.selectedOrder = [];
            this.ngOnInit();
          }
          else {
            alert('Cannot delete');
          }
        });
      }
      if (this.check)
        alert('Deleted');
    }
  }
}
