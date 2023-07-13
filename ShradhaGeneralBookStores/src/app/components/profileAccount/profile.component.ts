import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import moment from "moment";
import { AccountService } from "src/app/Service/account.service";
import { AccountAPI2 } from "src/app/modelapi/accountapi2.model";
import { Profile } from "src/app/modelapi/profile.model";

@Component({

    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  account: AccountAPI2 = new AccountAPI2();
  accountFormGroup: FormGroup;
  imageUrl: string;
  avatar: File = null;
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
    })


  }
  saveChange(){
    let profile = new Profile();
    profile.firstName = this.accountFormGroup.get('firstName').value;
    profile.lastName = this.accountFormGroup.get('lastName').value;
    profile.email = this.accountFormGroup.get('email').value;
    profile.phone = this.accountFormGroup.get('phone').value;

    var formData = new FormData();
    if(this.avatar != null){
      formData.append('avatar', this.avatar);
      formData.append('profile', JSON.stringify(profile));

      this._accountService.updateProfilenoavatar(formData).then(
        result=>{
          if(result as boolean){
            let status = false;
            if(localStorage.getItem('account') != null){
              status = true;
            }

            localStorage.clear();
            sessionStorage.clear();
            this._accountService.getbyemail(profile.email).then(
              result => {
                let acc = result[0] as AccountAPI2;
                if(status){
                  localStorage.setItem('account',JSON.stringify(acc));
                }
                sessionStorage.setItem('account',JSON.stringify(acc));
              }
            );

          }
        }
      );
    }else{
      formData.append('profile', JSON.stringify(profile));
      this._accountService.updateProfilenoavatar(formData).then(
        result=>{
          if(result as boolean){
            let status = false;
            if(localStorage.getItem('account') != null){
              status = true;
            }
            localStorage.clear();
            sessionStorage.clear();
            this._accountService.getbyemail(profile.email).then(
              result => {
                let acc = result[0] as AccountAPI2;
                if(status){
                  localStorage.setItem('account',JSON.stringify(acc));
                }
                sessionStorage.setItem('account',JSON.stringify(acc));
              }
            );

          }
        }
      );
    }

    this.ngOnInit();
  }

  onFileSelected(event:any){
    this.avatar = event.target.files[0];
    if (this.avatar) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(this.avatar);
    }
  }
}
