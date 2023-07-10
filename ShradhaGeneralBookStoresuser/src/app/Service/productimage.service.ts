import { ProductImage } from '../models/productimage.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class ProductImageService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(id: number, photo: File[]){
      var formdata = new FormData();
      for (var i = 0; i < photo.length; i++) {
        formdata.append('photo', photo[i]);
      };
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'ProductImage/Create/'+id,formdata));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'ProductImage/Read'));
    }
    async get(id: number){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'ProductImage/get?id=' + id));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'ProductImage/Delete?id=' + id));
    }

    async update(productImage: ProductImage){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'ProductImage/update',productImage));
    }
}
