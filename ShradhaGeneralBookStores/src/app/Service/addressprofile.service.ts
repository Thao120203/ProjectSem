import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { AddressProfile } from '../models/addressprofile.model';

@Injectable()
export class AddressProfileService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(addressProfile: AddressProfile){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'AddressProfile/Create',addressProfile));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'AddressProfile/Read'));
    }

    async get(id: number){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'AddressProfile/get?id=' + id));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'AddressProfile/Delete?id=' + id));
    }

    async update(addressProfile: AddressProfile){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'AddressProfile/update',addressProfile));
    }
}
