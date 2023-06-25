import { Component,OnInit } from "@angular/core";
import { EmailValidator, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { AccountService } from "src/app/Service/account.service";
import { Account } from "src/app/models/account.model";

@Component({
    selector: 'app-root',
    templateUrl: './loginAdmin.component.html'
})
export class LoginAdminComponent implements OnInit{
  loginFormGroup: FormGroup
  constructor(
    private _accountservice: AccountService,
    private _route: Router,
    private formBuilder: FormBuilder
  ){}
  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  login(): void{
    if (this.loginFormGroup.invalid) {
      this.loginFormGroup.markAllAsTouched();
      return;
    }
    let account: Account = this.loginFormGroup.value as Account;
    account.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
    account.updatedAt = moment().format('DD/MM/YYYY HH:mm:ss');
    this._accountservice.login(account).then(
      result=>{
        if(result as boolean){
          //làm vào trong lun
          alert('đăng nhập đúng');
        }else (
          //làm vào trong lun

          alert('đăng nhập sai đúng')
        )
      }
    );
    console.dir(account);
  }
}
