import { OrderDetailAPI } from "./orderdetailapi.model";

export class OrderApi3{
  id: number;
  accountId: number;
  totalPrice: number;
  statusId: number;
  statusPayment: string;
  addressId: number;
  address: string;
  voucherId: number;
  paymentMethodId: number;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}
