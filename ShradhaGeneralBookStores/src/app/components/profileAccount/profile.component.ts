import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import moment from "moment";
import { AccountService } from "src/app/Service/account.service";
import { AccountAPI2 } from "src/app/modelapi/accountapi2.model";

@Component({

    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  account: AccountAPI2 = new AccountAPI2();
  accountFormGroup: FormGroup;
  avatar: File;
  constructor(
    private activevateRoute:ActivatedRoute,
    private _accountService:AccountService,
    private formbuilder: FormBuilder,
  ){}
  ngOnInit(): void {
    this.account = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
    this.accountFormGroup  = this.formbuilder.group({

      firstName:[this.account.firstName,[
        Validators.required
      ]],
      lastName:[this.account.lastName,[
        Validators.required
      ]],
      email:[this.account.email,[
        Validators.required,

      ]],
      phone:[this.account.phone,[
        Validators.required,
        Validators.pattern(/^[0-9]{10,10}$/)
      ]],
      createdAt: [this.account.createdAt],
      updatedAt: [this.account.updatedAt]
    })


  }
  saveChange(){

  }
  selectFile($event){
    
  }
}
