import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MessageService } from 'primeng/api';
import { EventService } from "src/app/Service/event.service";
import { PublisherService } from "src/app/Service/publisher.service";
import { Publisher } from "src/app/models/publisher.model";


@Component({
    selector: 'app-root',
    templateUrl: './demo.add.publisher.component.html',
    providers: [MessageService]
})
export class DemoAddPublisherAdminComponent implements OnInit{
  publisherFormGroup: FormGroup
  constructor(

    private _route: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private _publisherService: PublisherService
  ){}

  ngOnInit(): void {
    this.publisherFormGroup = this.formBuilder.group({
      name:[''],
      nameshort:[''],
      location:[''],
      contactnumber:0,
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
    });
  }
  save(){
    let publisher: Publisher = this.publisherFormGroup.value as Publisher;
    console.dir(publisher);
    this._publisherService.create(publisher).then(result=>{
      if(result as true){
        alert("THanhf cong");
      }
    })
  }
 
}