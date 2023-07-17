import { Order } from '../models/order.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { OrderApi } from '../modelapi/orderapi.model';

@Injectable()
export class OrderServiceDetail {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async get(id: number){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'OrderDetail/GetByOrderId?orderid=' + id));
    }

}
