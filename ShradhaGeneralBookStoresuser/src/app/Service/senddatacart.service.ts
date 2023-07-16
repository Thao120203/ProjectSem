import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class SendDataCartService {
  private dataSubject = new Subject<Cart>();
  // Observable dữ liệu để các thành phần khác có thể subscribe
  data$ = this.dataSubject.asObservable();
  // Phương thức để thay đổi dữ liệu và thông báo cho các thành phần khác
  changeData(newData: Cart) {
    this.dataSubject.next(newData);
  }
}
