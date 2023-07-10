import { OrderStatus } from './../../../models/orderstatus.model';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './listOrderStatus.component.html',
  providers: [MessageService, ConfirmationService]
})

export class ListOrderStatusComponent implements OnInit {

  ordersStatus: OrderStatus[];
  first = 0;
  rows = 10;
  check: boolean = false;
  selectedOrderStatus!: OrderStatus[] | null;
  constructor(
    private _oderstatusService: OrderStatusService,
    private formbuilder: FormBuilder,
    private router: Router
  ) { }
  ngOnInit(): void {
    this._oderstatusService.read().then(result => {
      this.ordersStatus = result as OrderStatus[];
    },
      error => {

      })
  }

  deleted(id: number) {
    if (confirm('Are you sure you want to delete')) {
      this._oderstatusService.delete(id).then(result => {
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
    console.log(this.selectedOrderStatus);
    if (confirm('Are you sure you want to delete')) {
      for (let i = 0; i < this.selectedOrderStatus.length; i++) {
        this._oderstatusService.delete(this.selectedOrderStatus[i].id).then(result => {
          if (result as boolean) {
            this.check = true;
            this.selectedOrderStatus = [];
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
