import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { UtilsServiceService } from 'src/app/Service/utils-service.service';


@Component({
    selector: 'app-root',
    templateUrl: './editAuthor.component.html',

})

export class EditAuthorComponent implements OnInit{
  author: Author = new Author();
  authorFormGroup: FormGroup;
  constructor(
    private _authorService: AuthorService,
    private formbuilder: FormBuilder,
    private activevateRoute:ActivatedRoute,
    private router: Router,
    private utils:UtilsServiceService
  ) {}
    ngOnInit() {
      //get data for form group
      this.activevateRoute.paramMap.subscribe(c=>{
        var id = parseInt(c.get('id'));
        this.author.id = id;
        this._authorService.get(id).then(result=>{
          this.author = result[0] as Author;

          //set value from
          this.authorFormGroup.get('id').setValue(this.author.id);
          this.authorFormGroup.get('name').setValue(this.author.name);
          this.authorFormGroup.get('biography').setValue(this.author.biography);
          this.authorFormGroup.get('yearOfBirth').setValue(this.author.yearOfBirth);
          this.authorFormGroup.get('createdAt').setValue(this.author.createdAt);
        })
      });


      //create form group add Id
      this.authorFormGroup = this.formbuilder.group({
        id:[''],
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
      this._authorService.update(author).then(result=>{
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
