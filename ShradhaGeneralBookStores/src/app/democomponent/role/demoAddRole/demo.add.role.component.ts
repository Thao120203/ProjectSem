import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MessageService } from 'primeng/api';
import { EventService } from "src/app/Service/event.service";
import { Role } from "src/app/models/role.model";


@Component({
    selector: 'app-root',
    templateUrl: './demo.add.role.component.html',
    providers: [MessageService]
})
export class DemoAddRoleAdminComponent implements OnInit{
  roleFormGroup: FormGroup
  constructor(

    private _route: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.roleFormGroup = this.formBuilder.group({
      name:[''],
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
    });
  }
  save(){
    let role: Role = this.roleFormGroup.value;
    console.dir(role);
  }
 
}