import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import * as moment from 'moment';
import { AddressProfileService } from 'src/app/Service/addressprofile.service';
import { AddressProfile } from 'src/app/models/addressprofile.model';
import axios, { AxiosResponse, AxiosRequestConfig, ResponseType } from 'axios';


@Component({
    selector: 'app-root',
    templateUrl: './addAddressProfile.component.html',
})

export class AddAddressProfileComponent implements OnInit{

  cities: any[];
  addressProfileFormGroup: FormGroup;
  constructor(
    private _addressProfileService: AddressProfileService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {
      const Parameter: AxiosRequestConfig = {
        url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
        method: "GET",
        responseType: "json" as ResponseType, // Thêm kiểu dữ liệu ResponseType
      };


      const promise: Promise<AxiosResponse<any>> = axios(Parameter);
      promise.then(function (result: AxiosResponse<any>) {
        renderCity(result.data);
      });

      console.dir(this.cities);

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
      this._addressProfileService.create(addressProfile).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
function renderCity(data: any) {
  for (const x of data) {
    this.cities.options[this.citis.options.length] = new Option(x.Name, x.Id);
  }
}

