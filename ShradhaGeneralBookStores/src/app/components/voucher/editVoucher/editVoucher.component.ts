import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { Publisher } from 'src/app/models/publisher.model';
import { PublisherService } from 'src/app/Service/publisher.service';
import { Voucher } from 'src/app/models/voucher.model';
import { VoucherService } from 'src/app/Service/voucher.service';
import { UtilsServiceService } from 'src/app/Service/utils-service.service';


@Component({
    selector: 'app-root',
    templateUrl: './editVoucher.component.html',

})

export class EditVoucherComponent implements OnInit{
  voucher: Voucher = new Voucher();
  minDate: Date = new Date();
  voucherFormGroup: FormGroup;
  constructor(
    private _voucherService: VoucherService,
    private formbuilder: FormBuilder,
    private activevateRoute:ActivatedRoute,
    private router: Router,
    private utils:UtilsServiceService
  ) {}
    ngOnInit() {
      //get data for form group
      this.activevateRoute.paramMap.subscribe(c=>{
        var id = parseInt(c.get('id'));
        this.voucher.id = id;
        this._voucherService.get(id).then(result=>{
          this.voucher = result[0] as Voucher;

          //set value from
          this.voucherFormGroup.get('id').setValue(this.voucher.id);
          this.voucherFormGroup.get('name').setValue(this.voucher.name);
          this.voucherFormGroup.get('varityCode').setValue(this.voucher.varityCode);
          this.voucherFormGroup.get('discount').setValue(this.voucher.discount);
          this.voucherFormGroup.get('condition').setValue(this.voucher.condition);
          this.voucherFormGroup.get('quantity').setValue(this.voucher.quantity);

          let a = [];
          a.push(moment(this.voucher.timeStart, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY'));
          a.push(moment(this.voucher.timeEnd, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY'));
          console.log(a);

          this.voucherFormGroup.get('createdAt').setValue(this.voucher.createdAt);
        })
      });


      //create form group add Id
      this.voucherFormGroup = this.formbuilder.group({
        id:[''],
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
        time:[[],
          Validators.required
        ],
        status:false,
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let voucher = this.voucherFormGroup.value as Voucher;
      voucher.timeStart = moment(voucher.timeStart).format('DD/MM/YYYY HH:mm:ss');
      voucher.timeEnd = moment(voucher.timeEnd).format('DD/MM/YYYY HH:mm:ss');
      this._voucherService.update(voucher).then(result=>{
        if(result as true){
          this.utils.updateToast('Success')
          this.router.navigate(['listvoucher']);
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
