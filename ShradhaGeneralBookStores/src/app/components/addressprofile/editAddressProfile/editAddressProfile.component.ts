import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { AddressProfile } from 'src/app/models/addressprofile.model';
import { AddressProfileService } from 'src/app/Service/addressprofile.service';


@Component({
    selector: 'app-root',
    templateUrl: './editAddressProfile.component.html',

})

export class EditAddressProfileComponent implements OnInit{
  addressProfile: AddressProfile = new AddressProfile();
  addressProfileFormGroup: FormGroup;
  constructor(
    private _addressProfileService: AddressProfileService,
    private formbuilder: FormBuilder,
    private activevateRoute:ActivatedRoute,
    private router: Router
  ) {}
    ngOnInit() {
      //get data for form group
      this.activevateRoute.paramMap.subscribe(c=>{
        var id = parseInt(c.get('id'));
        this.addressProfile.id = id;
        this._addressProfileService.get(id).then(result=>{
          this.addressProfile = result[0] as AddressProfile;

          //set value from
          this.addressProfileFormGroup.get('id').setValue(this.addressProfile.id);
          this.addressProfileFormGroup.get('accountId').setValue(this.addressProfile.accountId);
          this.addressProfileFormGroup.get('street').setValue(this.addressProfile.street);
          this.addressProfileFormGroup.get('district').setValue(this.addressProfile.district);
          this.addressProfileFormGroup.get('city').setValue(this.addressProfile.city);
          this.addressProfileFormGroup.get('createdAt').setValue(this.addressProfile.createdAt);
        })
      });


      //create form group add Id
      this.addressProfileFormGroup = this.formbuilder.group({
        accountId: [''],
        street: [''],
        district: [''],
        city: [''],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let addressProfile = this.addressProfileFormGroup.value as AddressProfile;
      this._addressProfileService.update(addressProfile).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
