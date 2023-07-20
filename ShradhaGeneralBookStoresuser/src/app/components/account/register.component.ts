import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import * as moment from 'moment';
import { AccountService } from 'src/app/Service/account.service';
import { UtilsServiceService } from 'src/app/Service/utils-service.service';
import { AccountAPI } from 'src/app/modelapi/accountapi.model';
import { AccountAPI2 } from 'src/app/modelapi/accountapi2.model';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  comfirmpass: string;
  check: boolean = false;
  dontexist: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private _accountService: AccountService,
    private utils: UtilsServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    let account = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
    if (account != null) {
      this.router.navigate(['first']);
    }
    this.registerFormGroup = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
          ),
        ],
      ],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
      securitycode: ['agsdfasdhfg'],
      roleId: [[3]],
      status: [false],
      avatar: ['no-avatar.jpg'],
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
    });
    this.comfirmpass = '';
  }
  checkpassword() {
    if (this.comfirmpass == this.registerFormGroup.get('password').value) {
      this.check = true;
    } else {
      this.check = false;
    }
  }
  submit() {
    console.log(this.registerFormGroup);
    if (this.dontexist) {
      let account = this.registerFormGroup.value as AccountAPI;
      this.router.navigate(['login']);
      this._accountService.register(account).then((result) => {
        if (result as boolean) {
          alert('THanhf cong');
          // this.utils.updateToast('Successfully register')]

          this.router.navigate(['login']);
        }
      });
    }
  }
  checkExist(evt: any) {
    let email = evt.target.value as string;
    this._accountService.checkexists(email).then((result) => {
      if (result as boolean) {
        this.dontexist = false;
        console.log(this.dontexist);
      } else {
        this.dontexist = true;
        console.log(this.dontexist);
      }
    });
  }
}
