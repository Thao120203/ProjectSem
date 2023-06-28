import { DemoAddAuthorAdminComponent } from './democomponent/author/demoaddauthor/demoaddauthor.component';
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

// import { ProductAdminComponent } from './components/admin/ProductAdmin.component';
import { EditorModule } from 'primeng/editor';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'primeng/fileupload';
import { DemoAddEventAdminComponent } from './democomponent/event/demoAddEvent/demoaddevent.component';
import { DemoAddOrderstatusAdminComponent } from './democomponent/orderstatus/demoAddOrderstatus/demo.add.orderstatus.component';
import { DemoAddPublisherAdminComponent } from './democomponent/publisher/demoAddPublisher/demo.add.publisher.component';
import { DemoAddPaymentmethodAdminComponent } from './democomponent/paymentmethod/demoAddPaymentMethod/demo.add.paymentmethod.component';
import { DemoAddRoleAdminComponent } from './democomponent/role/demoAddRole/demo.add.role.component';
import { DemoAddVoucherAdminComponent } from './democomponent/voucher/demoAddVoucher/demo.add.voucher.component';
import { OrderStatusService } from './Service/orderstatus.service';
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
    DemoAddAuthorAdminComponent,
    DemoAddEventAdminComponent,
    DemoAddOrderstatusAdminComponent,
    DemoAddPublisherAdminComponent,
    DemoAddPaymentmethodAdminComponent,
    DemoAddRoleAdminComponent,
    DemoAddVoucherAdminComponent
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
    CalendarModule
  ],
  providers: [
    CategoryService,
    BaseURLService,
    RoleService,
    PublisherService,
    EventService,
    AuthorService,
    AccountService,
    OrderStatusService
  ],
  bootstrap: [DemoAddOrderstatusAdminComponent]
})
export class AppModule { }
