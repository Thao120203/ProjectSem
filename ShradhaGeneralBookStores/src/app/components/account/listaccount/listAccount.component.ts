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
  templateUrl: './listAccount.component.html',
  providers: [MessageService, ConfirmationService]
})
export class ListAccountComponent implements OnInit {
  accounts: AccountAPI2[];
  roles: Role[];
  first = 0;
  rows = 10;
  check: boolean = false;
  selectedAccount!: AccountAPI2[] | null;
  accountcurrent: AccountAPI2 = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
  constructor(
    private _accountService: AccountService,
    private formbuilder: FormBuilder,
    private router: Router,
    private _roleService: RoleService,
  ) {}
  ngOnInit() {
    this._accountService.read().then(result=>{
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
  deleted(id: number){
    if(this.accountcurrent.id != id){
      if (confirm('Are you sure you want to delete')) {
        this._accountService.delete(id).then(
          result =>{
            this.ngOnInit();
            alert('Deleted');
          }
        );
      }
    }else{
      alert('Cannot delete oneself')
    }
  }
  deleteSelected() {
    console.log(this.selectedAccount);
    if (confirm('Are you sure you want to delete')) {
      let a:number = 0;
      let b:number = 0;
      for (let i = 0; i < this.selectedAccount.length; i++) {
        console.log(this.selectedAccount[i].roles)
        if(this.checkdelete(this.selectedAccount[i].roles[0]))
        {
          this._accountService.delete(this.selectedAccount[i].id).then(result => {
            if (result as boolean) {
              this.check = true;
            }
          });
          a+=1;
        }else{
          b+=1;
        }
      }
      if(a >=0 )
      {
        alert('Delete successfully: '+ a);
      }

      if(b >=0 ){
        alert('Delete fail: '+ b);

      }
      this.selectedAccount = [];
      this.ngOnInit();
    }
  }

  checkdelete(role:string):boolean {
    if(this.accountcurrent.roles.includes("Super Admin")){
      return true;
    }
    if(role == "Admin"){
      return false;
    }
    return true;
  }
  redirect(account: AccountAPI2){
    if(this.checkdelete(account.roles[0])){
      this.router.navigate(['editaccount',{id: account.id}]);
    }else if(this.accountcurrent.id == account.id){
      this.router.navigate(['editaccount',{id: account.id}]);
    }else{
      alert('Insufficient privileges to edit account');
    }

  }
}
