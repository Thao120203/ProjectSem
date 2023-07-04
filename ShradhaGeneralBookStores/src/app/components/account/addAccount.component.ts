import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import * as moment from 'moment';
import { AccountService } from 'src/app/Service/account.service';
import { RoleService } from 'src/app/Service/role.service';
import { Role } from 'src/app/models/role.model';
import { AccountAPI } from 'src/app/modelapi/accountapi.model';

@Component({
    selector: 'app-root',
    templateUrl: './addAccount.component.html',
})

export class AddAccountComponent implements OnInit{
  roles: Role[];
  password: string;
  accountFormGroup: FormGroup;
  constructor(
    private _roleService: RoleService,
    private _accountService: AccountService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {
      this._roleService.read().then(result => {
        this.roles = result as Role[];
      });
      this.accountFormGroup = this.formbuilder.group({
        email: [''],
        password: [''],
        firstName: [''],
        lastName: [''],
        phone: [''],
        avatar: ['no-avatar.jpg'],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        roleId: [''],
      });
    }

    save(){
      // this._accountService.register(account).then(result=>{
      //   if(result as true){
      //     alert("THanhf cong");
      //   }
      // })]
      let account = this.accountFormGroup.value as AccountAPI;
      this._accountService.create(account);
    }

    reset(){
      this.ngOnInit();
    }
}
