import { Injectable } from '@angular/core';
import { Address } from '../modelapi/address.model';

@Injectable()
export class AddressService {

  public listaddress(): Address[] {
    let list: Address[] = [
      new Address(1,'Hà Giang',0),
      
    ];
    return list;
  }
}

