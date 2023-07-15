import { Component,OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

    ngOnInit(): void {
      if(localStorage.getItem('account') != null && sessionStorage.getItem('account') == null){
        sessionStorage.setItem('account',localStorage.getItem('account'));
      }
    }
}
