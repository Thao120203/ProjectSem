import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './listAuthor.component.html',
  providers: [MessageService, ConfirmationService]
})

export class ListAuthorComponent implements OnInit {
  authors: Author[];
  first = 0;
  rows = 10;
  check: boolean = false;
  selectedAuthors!: Author[] | null;
  constructor(
    private _authorService: AuthorService,
    private formbuilder: FormBuilder,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }
  ngOnInit() {
    this._authorService.read().then(result => {
      this.authors = result as Author[];
    })

  }


  isLastPage(): boolean {
    return this.authors ? this.first === this.authors.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.authors ? this.first === 0 : true;
  }
  
  deleteSelected() {
    let countsuccess = 0;
    let noti:string = '';
    console.log(this.selectedAuthors);
    if (confirm('Are you sure you want to delete')) {
      for (let i = 0; i < this.selectedAuthors.length; i++) {
        this._authorService.delete(this.selectedAuthors[i].id).then(result => {
          if (result as boolean) {
            countsuccess += 1;
            this.ngOnInit();
          }
          else {
            noti+=this.selectedAuthors[i].name+ ' ';
          }
        });
      }

      if(countsuccess != 0)
        alert('Deleted: '+ countsuccess);
      if(noti != '')
        alert('Cannot delete: '+ noti);
    }
  }
}
