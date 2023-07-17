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

  constructor(
    private _accountservice: AccountService,
    private _route: Router,
  ){}
  ngOnInit(): void {

  }

}
