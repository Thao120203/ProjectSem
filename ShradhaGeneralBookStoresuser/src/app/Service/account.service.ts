import { AccountAPI } from './../modelapi/accountapi.model';
import { Author } from '../models/author.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { Account } from '../models/account.model';
import { ChangePassword } from '../modelapi/changepassword.model';

@Injectable()
export class AccountService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async register(account: AccountAPI){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Account/Register',account));
    }

    async login(account: Account){
        return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Account/Login',account));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Author/Delete?id=' + id));
    }

    async update(account: AccountAPI){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Account/Update',account));
    }

    async create(account: AccountAPI){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Account/Create',account));
    }

    async active(id: string,securityCode: string){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() +'Account/Active?id=' + id+"&securitycode='" + securityCode));
    }

    async checkexists(email: string){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() +'Account/CheckExist?email=' + email));
    }

    async getRoleByAccountId(id: number){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() +'Account/GetRoleByAccountId?id=' + id));
    }

    async read(){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() +'Account/Read'));
    }

    async get(id: number){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() +'Account/Get?id='+id));
    }
    async getbyemail(email: string){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() +'account/GetByEmail?email='+email));
    }
    async updateProfilenoavatar(formData: FormData){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() +'account/UpdateProfileNoAvatar',formData));
    }
    async updateProfile(formData: FormData){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() +'account/UpdateProfile',formData));
    }
    async changePassword(newPassword: ChangePassword){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Account/ChangePassword',newPassword));
    }
}
