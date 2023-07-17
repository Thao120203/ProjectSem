import { OrderDetail } from "../models/orderdetail.model";

export class OrderApi {

    accountId: number;
    totalPrice: number;
    statusId: number;
    addressId: number;
    voucherId: number;
    paymentMethodId: number;
    listOrderDetail : OrderDetail[];
}
