import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AccountAPI2 } from '../modelapi/accountapi2.model';

@Injectable({
  providedIn: 'root'
})
export class SendService {
  private dataSubject = new Subject<AccountAPI2>();

  // Observable dữ liệu để các thành phần khác có thể subscribe
  data$ = this.dataSubject.asObservable();

  // Phương thức để thay đổi dữ liệu và thông báo cho các thành phần khác
  changeData(newData: AccountAPI2) {
    this.dataSubject.next(newData);
  }
}
