import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MessageService } from 'primeng/api';
import { EventService } from "src/app/Service/event.service";


@Component({
    selector: 'app-root',
    templateUrl: './demo.add.orderstatus.component.html',
    providers: [MessageService]
})
export class DemoAddOrderstatusAdminComponent implements OnInit{
  orderstatusFormGroup: FormGroup
  constructor(

    private _route: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.orderstatusFormGroup = this.formBuilder.group({
      name:[''],
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
    });
  }
  save(){
    let event: Event = this.orderstatusFormGroup.value;
    console.dir(event);
  }
 
}