import { Router } from '@angular/router';
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
    templateUrl: './listInvoice.component.html',

})

export class ListInvoiceComponent implements OnInit{
  invoices: Invoice[];
  constructor(
    private _invoiceService: InvoiceService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {
      this._invoiceService.read().then(result=>{
        this.invoices = result as Invoice[];
      })

    }
}
