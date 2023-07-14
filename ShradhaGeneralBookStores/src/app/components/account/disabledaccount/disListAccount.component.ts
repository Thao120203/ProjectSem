import { Account } from 'src/app/models/account.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/models/category.model';
import { AccountService } from 'src/app/Service/account.service';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/Service/role.service';
import { AccountAPI2 } from 'src/app/modelapi/accountapi2.model';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './disListAccount.component.html',
  providers: [MessageService, ConfirmationService]
})
export class DisAccountComponent implements OnInit {
  accounts: AccountAPI2[];
  roles: Role[];
  first = 0;
  rows = 10;
  check: boolean = false;
  selectedAccount!: Account[] | null;
  constructor(
    private _accountService: AccountService,
    private formbuilder: FormBuilder,
    private router: Router,
    private _roleService: RoleService,
  ) {}
  ngOnInit() {
    this._accountService.readdisable().then(result=>{
      this.accounts = result as AccountAPI2[];
      console.log(this.accounts);
    },
    error=>{
    })

    this._roleService.read().then(result=>{
      this.roles = result as Role[];
      console.log(this.roles);

    },
    error=>{
    })
  }
 
  
  active() {
    console.log(this.selectedAccount);
    if (confirm('Are you sure you want to roll back')) {
      for (let i = 0; i < this.selectedAccount.length; i++) {
        this._accountService.enable(this.selectedAccount[i].id).then(result => {
          if (result as boolean) {
            this.check = true;
            this.selectedAccount = [];
            this.ngOnInit();
          }
          else {
            alert('Cannot delete');
          }
        });
      }
      if (this.check)
        alert('Deleted');
    }
  }
}
