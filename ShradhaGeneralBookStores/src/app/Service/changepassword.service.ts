import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { BaseURLService } from "./BaseURL.service";
import { HttpClient } from "@angular/common/http";
import { ChangePassword } from "../modelapi/changepassword.model";

@Injectable()
export class ChangePasswordService{
    
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async change(newPassword: ChangePassword){
        return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Account/Change',newPassword));
      }
}