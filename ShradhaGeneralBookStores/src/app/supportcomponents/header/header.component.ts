import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountAPI2 } from 'src/app/modelapi/accountapi2.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  account: AccountAPI2 = new AccountAPI2();

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.account = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
  }

  change(){
      const body = document.querySelector('body');
      body.classList.toggle('toggle-sidebar');
  }

  logout(){
      sessionStorage.clear();
      localStorage.clear();
      this.router.navigate(['login']);
  }
}
