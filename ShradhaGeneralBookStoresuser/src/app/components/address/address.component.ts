import { AddressProfileService } from 'src/app/Service/addressprofile.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Service/address.service';
import { AccountAPI2 } from 'src/app/modelapi/accountapi2.model';
import { Address } from 'src/app/modelapi/address.model';
import { AddressProfile } from 'src/app/models/addressprofile.model';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  cities: Address[];
  districts: Address[];
  account: AccountAPI2;

  addressForm: FormGroup;
  constructor(
    private addressService: AddressService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _addressProfileService:AddressProfileService
  ){

  }
  ngOnInit(): void {
    if(sessionStorage.getItem('account')== null){
      this.router.navigate(['login']);
    }
    this.account = JSON.parse(sessionStorage.getItem('account')) as AccountAPI2;
    this.cities = this.addressService.listaddress().filter(a=>a.parentId == 0);
    this.districts =[];
    this.addressForm = this.formBuilder.group({
      street: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required]
    });
  }
  changeDistrict(){
    console.log(this.addressForm.controls['city'].value);
    this.districts = this.addressService.parent(this.addressForm.controls['city'].value.id).filter(ad=>ad.parentId == this.addressForm.controls['city'].value.id);
  }
  save(){
    let addressProfile = new AddressProfile();
    addressProfile.accountId = this.account.id;
    addressProfile.city = this.addressForm.controls['city'].value.name;
    addressProfile.district = this.addressForm.controls['district'].value.name;
    addressProfile.street = this.addressForm.controls['street'].value;
    addressProfile.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
    addressProfile.updatedAt = moment().format('DD/MM/YYYY HH:mm:ss');
    console.log(addressProfile);

    this._addressProfileService.create(addressProfile).then(
      result=>{
        if(result as boolean){
          alert("Add Success!");
          this.router.navigate(['/profile']);
        }
      }
    )
  }
}
