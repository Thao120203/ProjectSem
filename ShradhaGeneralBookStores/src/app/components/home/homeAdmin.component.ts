import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { UtilsServiceService } from "src/app/Service/utils-service.service";
import { AccountAPI2 } from 'src/app/modelapi/accountapi2.model';

@Component({
    selector: 'app-root',
    templateUrl: './homeAdmin.component.html'
})
export class HomeAdminComponent implements OnInit{

  constructor(utils: UtilsServiceService, private router: Router,) {
    utils.toast$.subscribe(message => {
      if(message != null)
      setTimeout(() => {
        window.alert(message);
      }, 200)
    })
  }

    ngOnInit(): void {
      if(localStorage.getItem('account') != null && sessionStorage.getItem('account') == null){
        sessionStorage.setItem('account',localStorage.getItem('account'));
      }
      if(sessionStorage.getItem('account') == null) {
        this.router.navigate(['login']);
      }
      // let account = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
      // if(!account.roles.includes('Admin')){
      //   localStorage.clear();
      //   sessionStorage.clear();
      //   this.router.navigate(['login',{role:0}]);
      // }

    }
}
