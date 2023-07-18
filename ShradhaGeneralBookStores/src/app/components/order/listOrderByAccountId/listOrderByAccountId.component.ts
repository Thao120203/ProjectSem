import { OrderStatus } from '../../../models/orderstatus.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OrderService } from 'src/app/Service/order.service';
import { Order } from 'src/app/models/order.model';
import { OrderApi } from 'src/app/modelapi/orderapi.model';
import { OrderApi2 } from 'src/app/modelapi/orderapi2.model';


@Component({
  selector: 'app-root',
  templateUrl: './listOrderByAccountId.component.html',
  providers: [MessageService, ConfirmationService]
})

export class ListOrderByAccountIdComponent implements OnInit {
  orders: OrderApi2[] = [];
  first = 0;
  rows = 10;
  check: boolean = false;
  selectedOrder!: Order[] | null;
  constructor(
    private _oderService: OrderService,
    private formbuilder: FormBuilder,
    private router: Router,
    private activevateRoute:ActivatedRoute,
  ) { }
  ngOnInit(): void {

    this.activevateRoute.paramMap.subscribe(params => {
      this._oderService.getByAccountId(parseInt(params.get('id'))).then(result => {
        console.log(this.orders);
        this.orders = result as OrderApi2[];
      },
        error => {
      })
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

  redirect(order: Order){
    if(order.statusId != 5 && order.statusId != 6 && order.statusId != 8 && order.statusId != 14){
      this.router.navigate(['editorder',{id: order.id}])
    }

  }
}
