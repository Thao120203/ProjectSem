import { Component,OnInit } from "@angular/core";
import { CategoryService } from "src/app/Service/author.service";


@Component({
    selector: 'app-root',
    templateUrl: './addCategory.component.html',

})

export class AddCategoryComponent implements OnInit{

  constructor(
    private _categoryService: CategoryService
  ){}
    ngOnInit() {


    }

}
