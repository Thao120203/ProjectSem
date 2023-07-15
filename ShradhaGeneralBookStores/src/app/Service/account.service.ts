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

    async register(account: Account){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Account/Register',account));
    }

    async login(account: Account){
        return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Account/Login',account));
    }

    async delete(id: number){
        let a = {"name": "a"};
        return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Account/Delete/' + id,a));
    }

    async update(account: AccountAPI){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Account/Update',account));
    }

    async create(account: AccountAPI){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Account/Create',account));
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

    async updateProfile(formData: FormData){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() +'account/UpdateProfile',formData));
    }

    async updateProfilenoavatar(formData: FormData){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() +'account/UpdateProfileNoAvatar',formData));
    }

    async ForgetPassword(email: string){
      let a = {"name": "a"};
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() +'Account/ForgetPassword/'+email, a));
    }
    async enable(id: number) {
      let a = {"name": "a"};
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Account/EnableAccount/'+id, a));
    }
    async readdisable() {
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Account/ReadDisable'));
    }
    async changePassword(newPassword: ChangePassword){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Account/ChangePassword',newPassword));
    }
}
