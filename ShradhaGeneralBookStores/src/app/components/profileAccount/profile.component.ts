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
  constructor( 
    private activevateRoute:ActivatedRoute,
    private _accountService:AccountService,
    private formbuilder: FormBuilder,
  ){}
  ngOnInit(): void {
    this.account = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
    this.accountFormGroup  = this.formbuilder.group({
     
      firstName:['',[
        Validators.required
      ]],
      lastName:['',[
        Validators.required
      ]],
      email:['',[
        Validators.required,
        
      ]],
      phone:[0,[
        Validators.required,
        Validators.pattern(/^[0-9]{10,10}$/)
      ]],
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
    })
    this.activevateRoute.paramMap.subscribe(c=>{
      var id = parseInt(c.get('id'));
      this.account.id = id;
      this._accountService.get(id).then(result=>{
        this.account = result[0] as AccountAPI2;

        //set value from
        this.accountFormGroup.get('id').setValue(this.account.id);
        this.accountFormGroup.get('firstName').setValue(this.account.firstName);
        this.accountFormGroup.get('lastName').setValue(this.account.lastName);
        this.accountFormGroup.get('phone').setValue(this.account.phone);
        this.accountFormGroup.get('email').setValue(this.account.email);
      })
    });
  }
  saveChange(){
   
  }
}
