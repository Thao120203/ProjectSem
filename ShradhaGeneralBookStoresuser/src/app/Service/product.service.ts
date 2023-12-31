import { Invoice } from '../models/invoice.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { Product } from '../models/product.model';
import { ProductAPI } from '../modelapi/productapi.model';

@Injectable()
export class ProductService {
  constructor(
    private baseUrlservice: BaseURLService,
    private httpclient: HttpClient
  ) { }

  async create(product: Product) {
    return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Product/Create', product));
  }

  async read() {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/Read'));
  }

  async get(id: number) {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/get?id=' + id));
  }
  async getuser(id: string) {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/getUser?id=' + id));
  }

  async delete(id: number) {
    return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Product/Delete?id=' + id));
  }

  async update(product: Product) {
    return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Product/update', product));
  }

  async add(product: ProductAPI) {
    return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Product/Add', product));
  }

  async readforcategory(id: string) {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/ReadForCategory?idCategory=' + id));
  }
  async readforcategoryuser(id: string) {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/ReadForCategoryUser?idCategory=' + id));
  }
  async readforauthor(id: string) {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/ReadForAuthor?idAuthor=' + id));
  }

  async readforauthorforUser(id: string) {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/ReadForAuthorUser?idAuthor=' + id));
  }

  async readforpublisher(id: string) {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/ReadForPublisher?idPublisher=' + id));
  }
  async readforpublisherforUser(id: string) {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/ReadForPublisherUser?idPublisher=' + id));
  }
  async readforuser() {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/ReadForUser'));
  }
  async readbyprice(min:number,max :number) {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/ReadByPrice?min='+min+'&max='+max));
  }

  async readForHot() {
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Product/ReadForHot'));
  }
}
