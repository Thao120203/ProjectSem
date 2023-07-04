import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { AddressProfile } from 'src/app/models/addressprofile.model';
import { AddressProfileService } from 'src/app/Service/addressprofile.service';


@Component({
    selector: 'app-root',
    templateUrl: './listAddressProfile.component.html',

})

export class ListAddressProfileComponent implements OnInit{
  addressProfiles: AddressProfile[];
  constructor(
    private _addressProfileService: AddressProfileService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {
      this._addressProfileService.read().then(result=>{
        this.addressProfiles = result as AddressProfile[];
      })

    }
}
