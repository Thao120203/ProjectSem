import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { OrderStatus } from 'src/app/models/orderstatus.model';
import { VoucherService } from 'src/app/Service/voucher.service';
import { Voucher } from 'src/app/models/voucher.model';
import { AccountService } from 'src/app/Service/account.service';
import { Account } from 'src/app/models/account.model';

@Component({
    selector: 'app-root',
    templateUrl: './addAccount.component.html',

})

export class AddAccountComponent implements OnInit{
  roles: string[];
  password: string;
  accountFormGroup: FormGroup;
  constructor(
    private _accountService: AccountService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {
      this.roles = [
        'AAA',
        'BBB',
        'CCC'
      ];

      this.accountFormGroup = this.formbuilder.group({
        email: [''],
        password: [''],
        firstName: [''],
        lastName: [''],
        phone: [''],
        avatar: [''],       
        sercurityCode: [''],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let account = this.accountFormGroup.value as Account;
      this._accountService.register(account).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
