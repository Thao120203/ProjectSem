import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as moment from 'moment';

import { PublisherService } from 'src/app/Service/publisher.service';
import { Publisher } from 'src/app/models/publisher.model';
import { UtilsServiceService } from 'src/app/Service/utils-service.service';


@Component({
    selector: 'app-root',
    templateUrl: './addPublisher.component.html',

})

export class AddPublisherComponent implements OnInit{

  publisherFormGroup: FormGroup;

  constructor(
    private _publisherService: PublisherService,
    private formbuilder: FormBuilder,
    private router: Router,
    private utils:UtilsServiceService
  ) {}
    ngOnInit() {

      this.publisherFormGroup = this.formbuilder.group({
        name:['',[
          Validators.required
        ]],
        nameShort:['',[
          Validators.required
        ]],
        location:['',[
          Validators.required
        ]],
        contactNumber:['',[
          Validators.required

        ]],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let publisher = this.publisherFormGroup.value as Publisher;
      this._publisherService.create(publisher).then(result=>{
        if(result){
          this.utils.updateToast('Success')
           this.router.navigate(['listpublisher']);
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
