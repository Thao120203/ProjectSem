import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { AccountService } from "src/app/Service/account.service";
import { SendService } from 'src/app/Service/send.service';
import { AccountAPI2 } from "src/app/modelapi/accountapi2.model";
import { Account } from "src/app/models/account.model";

@Component({
    selector: 'app-root',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  loginFormGroup: FormGroup;
  constructor(
    private _accountservice: AccountService,
    private _route: Router,
    private formBuilder: FormBuilder,
    private sendService: SendService
  ){}
  ngOnInit(): void {

    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberme: [false]
    })
  }

  login(): void{
    if (this.loginFormGroup.invalid) {
      this.loginFormGroup.markAllAsTouched();
      return;
    }
    let account: Account = new Account();
    account.email = this.loginFormGroup.controls['email'].value;
    account.password = this.loginFormGroup.controls['password'].value;
    account.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
    account.updatedAt = moment().format('DD/MM/YYYY HH:mm:ss');

    this._accountservice.login(account).then(
      result=>{
        if(result as boolean){
          //làm vào trong lun
          alert('đăng nhập thành công');

          this._accountservice.getbyemail(account.email).then(
            result => {
              let acc = result[0] as AccountAPI2;
              if(this.loginFormGroup.controls['rememberme'].value){
                localStorage.setItem('account',JSON.stringify(acc));
              }
              sessionStorage.setItem('account',JSON.stringify(acc));
              console.log(sessionStorage.getItem('account'));
              console.dir( JSON.parse(sessionStorage.getItem('account')));
              this.sendService.changeData(acc);
              this._route.navigate(['first']);

            }
          );
        }else (
          //làm vào trong lun
          alert('đăng nhập sai')
        )
      }
    );
  }
  tichxanh(evt:any){

  }


}
