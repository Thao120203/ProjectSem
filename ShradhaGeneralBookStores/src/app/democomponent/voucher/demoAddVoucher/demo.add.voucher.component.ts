import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MessageService } from 'primeng/api';
import { EventService } from "src/app/Service/event.service";


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
    private messageService: MessageService
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
    let event: Event = this.voucherFormGroup.value;
    console.dir(event);
  }
 
}