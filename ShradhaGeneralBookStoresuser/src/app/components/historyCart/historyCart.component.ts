import { Component,OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderService } from "src/app/Service/order.service";
import { OrderServiceDetail } from "src/app/Service/orderdetail.service";
import { OrderApi2 } from "src/app/modelapi/orderapi2.model";
import { OrderDetailAPI } from "src/app/modelapi/orderdetailapi.model";

@Component({
    selector: 'app-root',
    templateUrl: './historyCart.component.html'
})
export class HistoryCartsComponent implements OnInit{
  order: OrderApi2;
  listorderDetail: OrderDetailAPI[];
  total: number = 0;

  constructor(
    private activevateRoute: ActivatedRoute,
    private router: Router,
    private _orderService: OrderService,
    private _orderDetailService: OrderServiceDetail,

  )

  {}
    ngOnInit(): void {
      this.activevateRoute.paramMap.subscribe((c) => {
        this._orderService.getByOrderId(parseInt(c.get('id'))).then(
          result=>{
            this.order = result[0] as OrderApi2;
            console.log(this.order)
          }
        )
        this._orderDetailService.get(parseInt(c.get('id'))).then(
          result=>{
            this.listorderDetail = result as OrderDetailAPI[];
            for (let i = 0; i < this.listorderDetail.length; i++) {
              this.total+= this.listorderDetail[i].price * this.listorderDetail[i].quantity;
            }
          }
        );
      })
    }
}
