import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { OrderStatus } from 'src/app/models/orderstatus.model';


@Component({
    selector: 'app-root',
    templateUrl: './addOrder.component.html',

})

export class AddOrderComponent implements OnInit{

  cities: any[];
  OrderFormGroup: FormGroup;
  constructor(
    private _orderService: OrderStatusService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {

      this.OrderFormGroup = this.formbuilder.group({
        accountId:['',[
          Validators.required,
        ]],
        totalPrice:['',[
          Validators.required,
        ]],
        statusId:['',[
          Validators.required,
        ]],
        addressId:['',[
          Validators.required,
        ]],
        voucherId:['',[
          Validators.required,
        ]],
        paymentMethodId:['',[
          Validators.required,
        ]],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let order = this.OrderFormGroup.value as OrderStatus;
      this._orderService.create(order).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
