import { ListAuthorComponent } from './components/author/listAuthor/listAuthor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './components/home/homeAdmin.component';
import { ProductAdminComponent } from './components/product/productAdmin.component';
import { AddProductAdminComponent } from './components/product/addproductAdmin.component';
import { LoginAdminComponent } from './components/account/loginAdmin.component';
import { RegisterAdminComponent } from './components/account/registerAdmin.component';
import { SendEmailComponent } from './components/account/sendEmail.component';
import { AddCategoryComponent } from './components/category/addCategory.component';
import { AddAuthorComponent } from './components/author/addAuthor.component';
import { AddOrderStatusComponent } from './components/orderstatus/addOrderStatus.component';
import { AddPaymentMethodComponent } from './components/paymentmethod/addPaymentMethod.component';
import { AddPublisherComponent } from './components/publisher/addPublisher.component';
import { AddVoucherComponent } from './components/voucher/addVoucher.component';
import { AddRoleComponent } from './components/role/addRole.component';
import { EditCategoryComponent } from './components/category/editCategory/editCategory.component';
import { ListOrderStatusComponent } from './components/orderstatus/listOrdersStatus/listOrderStatus.component';
import { ListPaymentMethodComponent } from './components/paymentmethod/listPaymentMethod/listPaymentMethod.component';
import { ListPublisherComponent } from './components/publisher/listPublisher/listPublisher.component';
import { ListRoleComponent } from './components/role/listRole/listRole.component';
import { ListVoucherComponent } from './components/voucher/listVoucher/listVoucher.component';
import { EditAuthorComponent } from './components/author/editAuthor/editAuthor.component';
import { EditPublisherComponent } from './components/publisher/editPublisher/editPublisher.component';
import { EditRoleComponent } from './components/role/editRole/editRole.component';
import { EditVoucherComponent } from './components/voucher/editVoucher/editVoucher.component';
import { EditOrderStatusComponent } from './components/orderstatus/editOrderStatus/editOrderStatus.component';
import { EditPaymentMethodComponent } from './components/paymentmethod/editPaymentMethod/editPaymentMethod.component';
import { AddAccountComponent } from './components/account/addAccount.component';
import { AddAddressProfileComponent } from './components/addressprofile/addAdddressProfile/addAddressProfile.component';
import { ListAddressProfileComponent } from './components/addressprofile/listAddressProfile/listAddressProfile.component';
import { EditAddressProfileComponent } from './components/addressprofile/editAddressProfile/editAddressProfile.component';
import { AddInvoiceComponent } from './components/invoice/addInvoice.component';
import { ListInvoiceComponent } from './components/invoice/listInvoice/listInvoice.component';
import { EditInvoiceComponent } from './components/invoice/editInvoice/editInvoice.component';
import { ListCategoryComponent } from './components/category/listCategory/listCategory.component';
import { ListAccountComponent } from './components/account/listaccount/listAccount.component';
import { EditAccountComponent } from './components/account/editaccount/editAccount.component';
import { ListProductComponent } from './components/product/listproduct/listProduct.component';
import { AddOrderComponent } from './components/order/addOrder.component';
import { ListProductForCategoryComponent } from './components/category/listProductForCategory/listProductForCategory.component';
import { ListProductForAuthorComponent } from './components/author/listProductForAuthor/listProductForAuthor.component';
import { ListProductForPublisherComponent } from './components/publisher/listProductForPulisher/listProductForPublisher.component';
import { ProfileComponent } from './components/profileAccount/profile.component';
import { EditProductAdminComponent } from './components/product/editProduct/editProductAdmin.component';
import { ListOrderComponent } from './components/order/listOrder/listOrder.component';
import { DisAccountComponent } from './components/account/disabledaccount/disListAccount.component';
import { DisProductComponent } from './components/product/dislistproduct/disListProduct.component';
import { EditOrderComponent } from './components/order/editOrder/editOrder.component';




const routes: Routes =
[
  {path: '',component:HomeAdminComponent , children:[
    {path: 'productAdmin',component: ProductAdminComponent },
    {path: 'addproduct',component: AddProductAdminComponent},
    {path: 'listProduct',component: ListProductComponent},
    {path: 'editproduct',component: EditProductAdminComponent},
    {path: 'dislistproduct',component: DisProductComponent},

    {path: 'addcategory',component: AddCategoryComponent},
    {path: 'editcategory',component: EditCategoryComponent},
    {path: 'listcategory',component: ListCategoryComponent},
    {path: 'listProductForCategory',component: ListProductForCategoryComponent},

    {path: 'addauthor',component: AddAuthorComponent},
    {path: 'listauthor',component: ListAuthorComponent},
    {path: 'editauthor',component: EditAuthorComponent},
    {path: 'listProductForAuthor',component: ListProductForAuthorComponent},
    {path: 'dislistaccount',component: DisAccountComponent},

    {path: 'addorder',component: AddOrderComponent},
    {path: 'listorder',component: ListOrderComponent},
    {path: 'editorder',component: EditOrderComponent},

    {path: 'addorderstatus',component: AddOrderStatusComponent},
    {path: 'listorderstatus',component: ListOrderStatusComponent},
    {path: 'editorderstatus',component: EditOrderStatusComponent},

    {path: 'addpaymentmethod',component: AddPaymentMethodComponent},
    {path: 'listpaymentmethod',component: ListPaymentMethodComponent},
    {path: 'editpaymentmethod',component: EditPaymentMethodComponent},

    {path: 'addpublisher',component: AddPublisherComponent},
    {path: 'listpublisher',component: ListPublisherComponent},
    {path: 'editpublisher',component: EditPublisherComponent},
    {path: 'listProductForPublisher',component: ListProductForPublisherComponent},


    {path: 'addrole',component: AddRoleComponent},
    {path: 'listrole',component: ListRoleComponent},
    {path: 'editrole',component: EditRoleComponent},


    {path: 'addvoucher',component: AddVoucherComponent},
    {path: 'listvoucher',component: ListVoucherComponent},
    {path: 'editvoucher',component: EditVoucherComponent},

    {path: 'addaccount',component: AddAccountComponent},
    {path: 'listaccount',component: ListAccountComponent},
    {path: 'editaccount',component: EditAccountComponent},
    {path :'profile',component: ProfileComponent},



    {path: 'addaddressprofile',component: AddAddressProfileComponent},
    {path: 'listaddressprofile',component: ListAddressProfileComponent},
    {path: 'editaddressprofile',component: EditAddressProfileComponent},

    {path: 'addinvoice',component: AddInvoiceComponent},
    {path: 'listinvoice',component: ListInvoiceComponent},
    {path: 'editinvoice',component: EditInvoiceComponent},

  ]},
  {path: 'login',component: LoginAdminComponent},
  {path: 'register',component: RegisterAdminComponent},
  {path: 'sendemail',component: SendEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
