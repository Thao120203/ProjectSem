import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import * as moment from 'moment';
import { AddressProfileService } from 'src/app/Service/addressprofile.service';
import { AddressProfile } from 'src/app/models/addressprofile.model';
import { InvoiceService } from 'src/app/Service/invoice.service';
import { Invoice } from 'src/app/models/invoice.model';


@Component({
    selector: 'app-root',
    templateUrl: './addInvoice.component.html',

})

export class AddInvoiceComponent implements OnInit{

  invoiceFormGroup: FormGroup;
  constructor(
    private _invoiceService: InvoiceService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {

      this.invoiceFormGroup = this.formbuilder.group({
        invoiceNumber: [''],
        payment: [''],
        accountId: [''],
        status: [''],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let invoice = this.invoiceFormGroup.value as Invoice;
      this._invoiceService.create(invoice).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
