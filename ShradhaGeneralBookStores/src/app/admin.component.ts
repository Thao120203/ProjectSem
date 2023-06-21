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
        if(false){
            this.router.navigate(['login']);
        }
    }
}
    