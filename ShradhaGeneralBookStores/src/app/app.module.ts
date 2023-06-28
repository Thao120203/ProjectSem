import { DemoAddAuthorAdminComponent } from './democomponent/author/demoaddauthor/demoaddauthor.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseURLService } from './Service/BaseURL.service';
import { CategoryService } from './Service/category.service';
import { RoleService } from './Service/role.service';
import { PublisherService } from './Service/publisher.service';
import { EventService } from './Service/event.service';
import { AuthorService } from './Service/author.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './Service/account.service';
import { InputTextModule } from 'primeng/inputtext';
// import { ProductAdminComponent } from './components/admin/ProductAdmin.component';
import { EditorModule } from 'primeng/editor';
import { InputNumberModule } from 'primeng/inputnumber';
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
    InputNumberModule
  ],
  providers: [
    CategoryService,
    BaseURLService,
    RoleService,
    PublisherService,
    EventService,
    AuthorService,
    AccountService
  ],
  bootstrap: [DemoAddAuthorAdminComponent]
})
export class AppModule { }
