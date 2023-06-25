import { Voucher } from '../models/voucher.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class RoleService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(voucher: Voucher){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Voucher/Create',voucher));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Voucher/GetListParent'));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Voucher/Delete?id=' + id));
    }

    async update(voucher: Voucher){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Voucher/update',voucher));
    }
}
