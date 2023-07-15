import { Component,OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { PublisherService } from "src/app/Service/publisher.service";
import { Publisher } from "src/app/models/publisher.model";

@Component({
    selector: 'app-root',
    templateUrl: './listpublisher.component.html'
})
export class ListPublisherComponent implements OnInit{
  publishers: Publisher[];
  first = 0;
  rows = 10;
  constructor(
    private _publisherService: PublisherService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit(): void {
      this._publisherService.read().then(
        (result) => {
          this.publishers = result as Publisher[];
        },
        (error) => {}
      );
    }
}
