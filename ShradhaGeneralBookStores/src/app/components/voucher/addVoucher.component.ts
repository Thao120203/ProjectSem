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
import { UtilsServiceService } from 'src/app/Service/utils-service.service';


@Component({
    selector: 'app-root',
    templateUrl: './addVoucher.component.html',

})

export class AddVoucherComponent implements OnInit{
  minDate: Date = new Date();
  voucherFormGroup: FormGroup;
  constructor(
    private _voucherService: VoucherService,
    private formbuilder: FormBuilder,
    private router: Router,
    private utils : UtilsServiceService
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
        time:[[],Validators.required],
        status:false,
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let voucher = new Voucher();
      voucher.name = this.voucherFormGroup.get('name').value;
      voucher.varityCode = this.voucherFormGroup.get('varityCode').value;
      voucher.discount = this.voucherFormGroup.get('discount').value;
      voucher.condition = this.voucherFormGroup.get('condition').value;
      voucher.quantity = this.voucherFormGroup.get('quantity').value;
      voucher.timeStart =  moment(this.voucherFormGroup.get('time').value[0]).format('DD/MM/YYYY HH:mm:ss');
      voucher.timeEnd =  moment(this.voucherFormGroup.get('time').value[this.voucherFormGroup.get('time').value.length - 1]).format('DD/MM/YYYY HH:mm:ss');
      voucher.status = this.voucherFormGroup.get('status').value;
      voucher.createdAt = this.voucherFormGroup.get('createdAt').value;
      voucher.updatedAt = this.voucherFormGroup.get('updatedAt').value;

      this._voucherService.create(voucher).then(result=>{
        if(result){
          this.utils.updateToast('Success')
          this.router.navigate(['listvoucher']);
        }
      })
      console.log(voucher);


    }

    reset(){
      this.ngOnInit();
    }
}
