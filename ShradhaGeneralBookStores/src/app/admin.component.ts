import { Component,OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit{

    constructor(
        private router: Router
    ){}
    ngOnInit(): void {
      if(localStorage.getItem('account') != null && sessionStorage.getItem('account') == null){
        sessionStorage.setItem('account',localStorage.getItem('account'));
      }

      if(sessionStorage.getItem('account') == null) {
        this.router.navigate(['login']);
      }
    }
}
