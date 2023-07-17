import { PaymentMethodService } from './Service/paymentmethod.service';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAdminComponent } from './components/home/homeAdmin.component';
import { ProductAdminComponent } from './components/product/productAdmin.component';
import { AddProductAdminComponent } from './components/product/addproductAdmin.component';
import { LoginAdminComponent } from './components/account/loginAdmin.component';
import { RegisterAdminComponent } from './components/account/registerAdmin.component';
import { AdminComponent } from './admin.component';
import { SendEmailComponent } from './components/account/sendEmail.component';
import { AddCategoryComponent } from './components/category/addCategory.component';
import { BaseURLService } from './Service/BaseURL.service';
import { CategoryService } from './Service/category.service';
import { RoleService } from './Service/role.service';
import { PublisherService } from './Service/publisher.service';
import { EventService } from './Service/event.service';
import { AuthorService } from './Service/author.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './Service/account.service';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

// import { ProductAdminComponent } from './components/admin/ProductAdmin.component';

import { EditorModule } from 'primeng/editor';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { OrderStatusService } from './Service/orderstatus.service';
import { HeaderComponent } from './supportcomponents/header/header.component';
import { AsideComponent } from './supportcomponents/aside/aside.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { FooterComponent } from './supportcomponents/footer/footer.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AddAuthorComponent } from './components/author/addAuthor.component';
import { AddOrderStatusComponent } from './components/orderstatus/addOrderStatus.component';
import { AddPaymentMethodComponent } from './components/paymentmethod/addPaymentMethod.component';
import { AddPublisherComponent } from './components/publisher/addPublisher.component';
import { AddVoucherComponent } from './components/voucher/addVoucher.component';
import { VoucherService } from './Service/voucher.service';
import { ListAuthorComponent } from './components/author/listAuthor/listAuthor.component';
import { AddRoleComponent } from './components/role/addRole.component';
import { EditCategoryComponent } from './components/category/editCategory/editCategory.component';
import { ListOrderStatusComponent } from './components/orderstatus/listOrdersStatus/listOrderStatus.component';
import { ListRoleComponent } from './components/role/listRole/listRole.component';
import { ListVoucherComponent } from './components/voucher/listVoucher/listVoucher.component';
import { ListPaymentMethodComponent } from './components/paymentmethod/listPaymentMethod/listPaymentMethod.component';
import { ListPublisherComponent } from './components/publisher/listPublisher/listPublisher.component';
import { EditAuthorComponent } from './components/author/editAuthor/editAuthor.component';
import { EditPublisherComponent } from './components/publisher/editPublisher/editPublisher.component';
import { EditRoleComponent } from './components/role/editRole/editRole.component';
import { EditVoucherComponent } from './components/voucher/editVoucher/editVoucher.component';
import { EditOrderStatusComponent } from './components/orderstatus/editOrderStatus/editOrderStatus.component';
import { EditPaymentMethodComponent } from './components/paymentmethod/editPaymentMethod/editPaymentMethod.component';
import { ListAccountComponent } from './components/account/listaccount/listAccount.component';
import { AddAccountComponent } from './components/account//addAccount.component';
import { AddAddressProfileComponent } from './components/addressprofile/addAdddressProfile/addAddressProfile.component';
import { AddressProfileService } from './Service/addressprofile.service';
import { ListAddressProfileComponent } from './components/addressprofile/listAddressProfile/listAddressProfile.component';
import { EditAddressProfileComponent } from './components/addressprofile/editAddressProfile/editAddressProfile.component';
import { AddInvoiceComponent } from './components/invoice//addInvoice.component';
import { EditInvoiceComponent } from './components/invoice/editInvoice/editInvoice.component';
import { ListInvoiceComponent } from './components/invoice/listInvoice/listInvoice.component';
import { InvoiceService } from './Service/invoice.service';
import { ListCategoryComponent } from './components/category/listCategory/listCategory.component';
import { ProductService } from './Service/product.service';
import { ProductImageService } from './Service/productimage.service';
import { EditAccountComponent } from './components/account/editaccount/editAccount.component';

import { ConfirmationService } from 'primeng/api';
import { ListProductComponent } from './components/product/listproduct/listProduct.component';
import { ListProductForCategoryComponent } from './components/category/listProductForCategory/listProductForCategory.component';
import { ListProductForAuthorComponent } from './components/author/listProductForAuthor/listProductForAuthor.component';
import { ListProductForPublisherComponent } from './components/publisher/listProductForPulisher/listProductForPublisher.component';
import { ProfileComponent } from './components/profileAccount/profile.component';
import { EditProductAdminComponent } from './components/product/editProduct/editProductAdmin.component';
import { AddOrderComponent } from './components/order/addOrder.component';
import { OrderService } from './Service/order.service';
import { DisAccountComponent  } from './components/account/disabledaccount/disListAccount.component';
import {  DisProductComponent } from './components/product/dislistproduct/disListProduct.component';
import { CardModule } from 'primeng/card';
import { ListOrderComponent } from './components/order/listOrder/listOrder.component';
import { EditOrderComponent } from './components/order/editOrder/editOrder.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeAdminComponent,
    ProductAdminComponent,
    AddProductAdminComponent,
    LoginAdminComponent,
    RegisterAdminComponent,
    AdminComponent,
    SendEmailComponent,
    AddCategoryComponent,

    HeaderComponent,
    AsideComponent,
    ListCategoryComponent,
    FooterComponent,
    AddAuthorComponent,
    AddOrderStatusComponent,
    AddPaymentMethodComponent,
    AddPublisherComponent,
    AddVoucherComponent,
    ListAuthorComponent,
    AddRoleComponent,
    EditCategoryComponent,
    ListOrderStatusComponent,
    ListRoleComponent,
    ListVoucherComponent,
    ListPaymentMethodComponent,
    ListPublisherComponent,
    EditAuthorComponent,
    EditPublisherComponent,
    EditRoleComponent,
    EditVoucherComponent,
    EditAuthorComponent,
    EditOrderStatusComponent,
    EditPaymentMethodComponent,
    AddAccountComponent,
    ListAccountComponent,
    ListProductForCategoryComponent,
    AddAddressProfileComponent,
    ListAddressProfileComponent,
    EditAddressProfileComponent,
    EditAccountComponent,
    AddInvoiceComponent,
    EditInvoiceComponent,
    ListInvoiceComponent,
    ListProductComponent,
    ListProductForAuthorComponent,
    ListProductForPublisherComponent,
    ProfileComponent,
    EditProductAdminComponent,
    ListProductComponent,
    AddOrderComponent,
    DisAccountComponent,
    DisProductComponent,
    ListOrderComponent,
    EditOrderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    //input
    InputTextModule,
    EditorModule,
    InputNumberModule,
    FileUploadModule,
    CalendarModule,
    DropdownModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DataViewModule,
    ProgressSpinnerModule,
    MultiSelectModule,
    PasswordModule,
    InputSwitchModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    CardModule
  ],
  providers: [
    CategoryService,
    BaseURLService,
    RoleService,
    PublisherService,
    EventService,
    AuthorService,
    AccountService,
    OrderStatusService,
    PaymentMethodService,
    VoucherService,
    AddressProfileService,
    InvoiceService,
    ProductService,
    ProductImageService,
    ConfirmationService,
    OrderService
  ],
  bootstrap: [AdminComponent]
})
export class AppModule { }
