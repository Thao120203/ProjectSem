import { OrderStatus } from '../../../models/orderstatus.model';
import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/Service/role.service';
import { Voucher } from 'src/app/models/voucher.model';
import { VoucherService } from 'src/app/Service/voucher.service';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
    selector: 'app-root',
    templateUrl: './listVoucher.component.html',
    providers: [MessageService, ConfirmationService]
})

export class ListVoucherComponent implements OnInit{

  vouchers: Voucher[];
  first = 0;
  rows = 10;
  check: boolean = false;
  selectedVoucher!: Voucher[] | null;
  constructor(
    private _voucherService: VoucherService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {

    this._voucherService.read().then(result=>{

      this.vouchers = result as Voucher[];
    },
    error=>{

    })
  }

  deleted(id: number){
    if(confirm('Are you sure you want to delete')){
      this._voucherService.delete(id).then(result=>{
        if(result as boolean){
          alert('Deleted');
          this.ngOnInit();
        }
        else{
          alert('Cannot delete');
        }
      });
    }

  }
  deleteSelected() {
    console.log(this.selectedVoucher);
    if (confirm('Are you sure you want to delete')) {
      for (let i = 0; i < this.selectedVoucher.length; i++) {
        this._voucherService.delete(this.selectedVoucher[i].id).then(result => {
          if (result as boolean) {
            this.check = true;
            this.ngOnInit();
          }
          else {
            alert('Cannot delete');
          }
        });
      }
      if (this.check)
        alert('Deleted');
    }
  }
}
