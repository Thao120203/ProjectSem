import { Component,OnInit } from "@angular/core";
import { UtilsServiceService } from "src/app/Service/utils-service.service";

@Component({
    selector: 'app-root',
    templateUrl: './homeAdmin.component.html'
})
export class HomeAdminComponent implements OnInit{

  constructor(utils: UtilsServiceService) {
    utils.toast$.subscribe(message => {
      if(message != null)
      setTimeout(() => {
        window.alert(message);
      }, 200)
    })
  }

    ngOnInit(): void {

    }
}
