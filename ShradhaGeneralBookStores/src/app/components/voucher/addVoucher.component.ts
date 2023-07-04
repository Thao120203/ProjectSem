import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { OrderStatus } from 'src/app/models/orderstatus.model';
import { VoucherService } from 'src/app/Service/voucher.service';
import { Voucher } from 'src/app/models/voucher.model';


@Component({
    selector: 'app-root',
    templateUrl: './addVoucher.component.html',

})

export class AddVoucherComponent implements OnInit{

  voucherFormGroup: FormGroup;
  constructor(
    private _voucherService: VoucherService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {

      this.voucherFormGroup = this.formbuilder.group({
        name:['',[
          Validators.required
        ]],
        varityCode:['',[
          Validators.required
        ]],
        discount:[0,[
          Validators.required
        ]],
        condition:[0,[
          Validators.required
        ]],
        quantity:[0,[
          Validators.required
        ]],
        timeStart:['',[
          Validators.required
        ]],
        timeEnd:['',[
          Validators.required
        ]],
        status:false,
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let voucher = this.voucherFormGroup.value as Voucher;
      voucher.timeStart = moment(voucher.timeStart).format('DD/MM/YYYY HH:mm:ss');
      voucher.timeEnd = moment(voucher.timeEnd).format('DD/MM/YYYY HH:mm:ss');
      this._voucherService.create(voucher).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
