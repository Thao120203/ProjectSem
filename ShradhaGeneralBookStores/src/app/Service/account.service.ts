import { Account } from './../modelapi/accountapi.model';
import { Author } from '../models/author.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class AccountService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async register(account: Account){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Account/Register',account));
    }

    async login(account: Account){
        return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Account/Login',account));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Author/Delete?id=' + id));
    }

    async update(author: Author){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Author/update',author));
    }
}
