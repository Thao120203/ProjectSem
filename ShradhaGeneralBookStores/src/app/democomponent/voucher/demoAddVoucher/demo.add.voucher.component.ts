import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MessageService } from 'primeng/api';
import { EventService } from "src/app/Service/event.service";
import { VoucherService } from "src/app/Service/voucher.service";
import { Voucher } from "src/app/models/voucher.model";


@Component({
    selector: 'app-root',
    templateUrl: './demo.add.voucher.component.html',
    providers: [MessageService]
})
export class DemoAddVoucherAdminComponent implements OnInit{
 voucherFormGroup: FormGroup
  constructor(

    private _route: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private _voucherService: VoucherService
  ){}

  ngOnInit(): void {
    this.voucherFormGroup = this.formBuilder.group({
      name:[''],
      varitycode:[''],
      discount:0,
      condition:0,
      quantity:0,
      timestart:[''],
      timeend:[''],
      status:false,
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
    });
  }
  save(){
    let voucher: Voucher = this.voucherFormGroup.value as Voucher;
    console.dir(voucher);
    this._voucherService.create(voucher).then(result=>{
      if(result as true){
        alert("THanhf cong");
      }
    })
  }
 
}