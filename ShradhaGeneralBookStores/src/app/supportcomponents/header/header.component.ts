import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    ngOnInit(): void {
    }

    change(){
      const body = document.querySelector('body');
      body.classList.toggle('toggle-sidebar');
    }
}
