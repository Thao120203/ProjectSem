import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { OrderStatus } from 'src/app/models/orderstatus.model';
import { UtilsServiceService } from 'src/app/Service/utils-service.service';


@Component({
    selector: 'app-root',
    templateUrl: './addOrderStatus.component.html',

})

export class AddOrderStatusComponent implements OnInit{

  orderStatusFormGroup: FormGroup;
  constructor(
    private _orderStatusService: OrderStatusService,
    private formbuilder: FormBuilder,
    private router: Router,
    private utils:UtilsServiceService
  ) {}
    ngOnInit() {

      this.orderStatusFormGroup = this.formbuilder.group({
        name:['',[
          Validators.required,
        ]],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let orderStatus = this.orderStatusFormGroup.value as OrderStatus;
      this._orderStatusService.create(orderStatus).then(result=>{
        if(result as true){
          this.utils.updateToast('Success')
          this.router.navigate(['listorderstatus']);
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
