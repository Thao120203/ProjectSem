import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { UtilsServiceService } from 'src/app/Service/utils-service.service';


@Component({
    selector: 'app-root',
    templateUrl: './addAuthor.component.html',

})

export class AddAuthorComponent implements OnInit{

  authorFormGroup: FormGroup;

  constructor(
    private _authorService: AuthorService,
    private formbuilder: FormBuilder,
    private router: Router,
    private utils: UtilsServiceService
  ) {}
    ngOnInit() {

      this.authorFormGroup = this.formbuilder.group({
        name:['',[
          Validators.required,
        ]],
        biography:[''],
        yearOfBirth: ['',[
          Validators.required,
        ]],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let author = this.authorFormGroup.value as Author;
      author.yearOfBirth = author.yearOfBirth.toString();
      this._authorService.create(author).then(result=>{
        if(result as true){
          this.utils.updateToast('Success')
          this.router.navigate(['listauthor']);
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
