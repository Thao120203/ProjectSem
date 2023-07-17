import { UtilsServiceService } from './../../../../../../ShradhaGeneralBookStoresuser/src/app/Service/utils-service.service';
import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { OrderStatus } from 'src/app/models/orderstatus.model';
import { OrderApi2 } from 'src/app/modelapi/orderapi2.model';
import { OrderService } from 'src/app/Service/order.service';


@Component({
    selector: 'app-root',
    templateUrl: './editOrder.component.html',

})

export class EditOrderComponent implements OnInit{
  orderstatus: OrderStatus[];
  cities: any[];
  OrderFormGroup: FormGroup;
  constructor(
    private utils:UtilsServiceService,
    private _orderStatusService: OrderStatusService,
    private _orderService: OrderService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {
      this._orderStatusService.read().then(result=>{
        this.orderstatus = result as OrderStatus[];
      })
      
      this.OrderFormGroup = this.formbuilder.group({
        accountId:[''],
        totalPrice:[''],
        statusId:['',[
          Validators.required,
        ]],
        addressId:[''],
        voucherId:[''],
        paymentMethodId:[''],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let order = this.OrderFormGroup.value as OrderApi2;

      this._orderService.update(order).then(result=>{
        if(result as true){
          this.utils.updateToast('Success')
          this.router.navigate(['listaccount']);
        }
      });
      console.dir(order);
    }

    reset(){
      this.ngOnInit();
    }
}
