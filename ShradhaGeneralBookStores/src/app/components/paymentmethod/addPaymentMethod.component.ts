import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { OrderStatus } from 'src/app/models/orderstatus.model';
import { PaymentMethodService } from 'src/app/Service/paymentmethod.service';
import { PaymentMethod } from 'src/app/models/paymentmethod.model';
import { UtilsServiceService } from 'src/app/Service/utils-service.service';


@Component({
    selector: 'app-root',
    templateUrl: './addPaymentMethod.component.html',

})

export class AddPaymentMethodComponent implements OnInit{

  paymentMethodFormGroup: FormGroup;
  constructor(
    private _paymentMethodService: PaymentMethodService,
    private formbuilder: FormBuilder,
    private router: Router,
    private utils:UtilsServiceService
  ) {}
    ngOnInit() {

      this.paymentMethodFormGroup = this.formbuilder.group({
        name:['',[
          Validators.required
        ]],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let paymentMethod = this.paymentMethodFormGroup.value as PaymentMethod;
      this._paymentMethodService.create(paymentMethod).then(result=>{
        if(result as true){
          this.utils.updateToast('Success')
          this.router.navigate(['listpaymentmethod']);
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
