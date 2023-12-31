import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { AccountService } from 'src/app/Service/account.service';
import { SendService } from 'src/app/Service/send.service';
import { AccountAPI2 } from 'src/app/modelapi/accountapi2.model';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './active.component.html',
})
export class ActiveComponent implements OnInit {
  constructor(
    private _accountservice: AccountService,
    private _route: Router,
    private activevateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activevateRoute.paramMap.subscribe((a) => {
      let parts: string[] = a.get('id').split("&securitycode=");
      this._accountservice
        .active(parts[0], parts[1])
        .then((result) => {
          if (result as boolean) {
            alert('Active successfully');
            this._route.navigate(['login']);
          }
          else
          {
            alert('Active Unsuccessfully');
          }
        });
      console.log(parts);

    });
  }
}
