import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { AddressProfile } from 'src/app/models/addressprofile.model';
import { AddressProfileService } from 'src/app/Service/addressprofile.service';
import { Invoice } from 'src/app/models/invoice.model';
import { InvoiceService } from 'src/app/Service/invoice.service';


@Component({
    selector: 'app-root',
    templateUrl: './editInvoice.component.html',

})

export class EditInvoiceComponent implements OnInit{
  invoice: Invoice = new Invoice();
  invoiceFormGroup: FormGroup;
  constructor(
    private _invoiceService: InvoiceService,
    private formbuilder: FormBuilder,
    private activevateRoute:ActivatedRoute,
    private router: Router
  ) {}
    ngOnInit() {
      //get data for form group
      this.activevateRoute.paramMap.subscribe(c=>{
        var id = parseInt(c.get('id'));
        this.invoice.id = id;
        this._invoiceService.get(id).then(result=>{
          this.invoice = result[0] as Invoice;

          //set value from
          this.invoiceFormGroup.get('id').setValue(this.invoice.id);
          this.invoiceFormGroup.get('accountId').setValue(this.invoice.invoiceNumber);
          this.invoiceFormGroup.get('street').setValue(this.invoice.payment);
          this.invoiceFormGroup.get('district').setValue(this.invoice.accountId);
          this.invoiceFormGroup.get('city').setValue(this.invoice.status);
          this.invoiceFormGroup.get('createdAt').setValue(this.invoice.createdAt);
        })
      });


      //create form group add Id
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
      this._invoiceService.update(invoice).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
