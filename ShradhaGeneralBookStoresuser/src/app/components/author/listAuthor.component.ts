import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/Service/product.service';
import { ProductAPI2 } from 'src/app/modelapi/productapi2.model';
import { ProductAPI3 } from 'src/app/modelapi/productapi3.model';
import { ProductAPI4 } from 'src/app/modelapi/productapi4.model';



@Component({
  selector: 'app-root',
  templateUrl: './listAuthor.component.html',
  
})

export class ListAuthorComponent implements OnInit {
  authors: Author[];
  first = 0;
  rows = 10;
  check: boolean = false;
  selectedAuthors!: Author[] | null;
  products : ProductAPI4[];
  constructor(
    private _authorService: AuthorService,
    private _productService: ProductService,
    private formbuilder: FormBuilder,
    private router: Router,
   
  ) { }
  ngOnInit() {
    this._authorService.read().then(result => {
      this.authors = result as Author[];
    })
    
    this._productService.readforuser().then(result => {
      this.products =  result as ProductAPI4[];
    })
  }


  isLastPage(): boolean {
    return this.authors ? this.first === this.authors.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.authors ? this.first === 0 : true;
  }
  
 countProduct(authorname: string): number {
  return this.products.filter(p=>p.authors.includes(authorname)).length;
 }

}
