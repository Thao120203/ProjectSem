import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/Service/account.service';
import { AccountAPI2 } from 'src/app/modelapi/accountapi2.model';

@Component({
  selector: 'app-root',
  templateUrl: './sendEmail.component.html',
})
export class SendEmailComponent implements OnInit {
  accountFormGroup: FormGroup;
  dontexist: boolean = false;
  constructor(
    private _accountService: AccountService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    let account = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
    if(account != null){
      this.router.navigate(['first']);
    }
    this.accountFormGroup = this.formbuilder.group({
      email: [''],
    });
  }

  forget() {
    if (this.dontexist) {
      this._accountService.ForgetPassword(
        this.accountFormGroup.get('email').value
      );
    } else {
      alert('Email không tồn tại');
    }
  }
  checkExist() {
    this._accountService
      .checkexists(this.accountFormGroup.get('email').value)
      .then((result) => {
        if (result as boolean) {
          this.dontexist = true;
          console.log(this.dontexist);
        } else {
          this.dontexist = false;
          console.log(this.dontexist);
        }
      });
  }
}
