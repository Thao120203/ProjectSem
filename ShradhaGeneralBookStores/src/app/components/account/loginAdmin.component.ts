import { Component,OnInit } from "@angular/core";
import { EmailValidator, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { AccountService } from "src/app/Service/account.service";
import { UtilsServiceService } from "src/app/Service/utils-service.service";
import { AccountAPI2 } from "src/app/modelapi/accountapi2.model";
import { Account } from "src/app/models/account.model";

@Component({
    selector: 'app-root',
    templateUrl: './loginAdmin.component.html'
})
export class LoginAdminComponent implements OnInit{
  loginFormGroup: FormGroup;
  constructor(
    private _accountservice: AccountService,
    private _route: Router,
    private formBuilder: FormBuilder,
    private utils:UtilsServiceService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberme: [false],

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
          this.utils.updateToast('Login Success')

          this._accountservice.getbyemail(account.email).then(
            result => {
              let acc = result[0] as AccountAPI2;
              if(this.loginFormGroup.controls['rememberme'].value){
                localStorage.setItem('account',JSON.stringify(acc));
              }
              sessionStorage.setItem('account',JSON.stringify(acc));
              this.router.navigate(['']);

              // console.dir( JSON.parse(sessionStorage.getItem('account')));

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
