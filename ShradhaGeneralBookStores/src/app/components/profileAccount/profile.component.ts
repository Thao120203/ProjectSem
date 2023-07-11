import { Component,OnInit } from "@angular/core";
import { AccountAPI2 } from "src/app/modelapi/accountapi2.model";

@Component({

    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  account: AccountAPI2 = new AccountAPI2();

  ngOnInit(): void {

    this.account = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
  }
}
