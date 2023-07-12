import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReloadService {
  private reloadSubject = new Subject<void>();

  reloadComponentB() {
    this.reloadSubject.next();
  }

  getReloadObservable() {
    return this.reloadSubject.asObservable();
  }
}
