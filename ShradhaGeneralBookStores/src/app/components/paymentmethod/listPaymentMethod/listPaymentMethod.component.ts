import { OrderStatus } from '../../../models/orderstatus.model';
import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { PaymentMethod } from 'src/app/models/paymentmethod.model';
import { PaymentMethodService } from 'src/app/Service/paymentmethod.service';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
    selector: 'app-root',
    templateUrl: './listPaymentMethod.component.html',
    providers: [MessageService, ConfirmationService]
})

export class ListPaymentMethodComponent implements OnInit{

  paymentsMethod: PaymentMethod[];
  first = 0;
  rows = 10;
  check: boolean = false;
  selectedPaymentMethod!: PaymentMethod[] | null;
  constructor(
    private _paymentsMethodService: PaymentMethodService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {

    this._paymentsMethodService.read().then(result=>{

      this.paymentsMethod = result as PaymentMethod[];
    },
    error=>{

    })
  }

  deleted(id: number){
    if(confirm('Are you sure you want to delete')){
      this._paymentsMethodService.delete(id).then(result=>{
        if(result as boolean){
          alert('Deleted');
          this.ngOnInit();
        }
        else{
          alert('Cannot delete');
        }
      });
    }

  }
  deleteSelected() {
    console.log(this.selectedPaymentMethod);
    if (confirm('Are you sure you want to delete')) {
      for (let i = 0; i < this.selectedPaymentMethod.length; i++) {
        this._paymentsMethodService.delete(this.selectedPaymentMethod[i].id).then(result => {
          if (result as boolean) {
            this.check = true;
            this.selectedPaymentMethod = [];
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
