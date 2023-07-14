import { ConfirmationService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ShopComponent } from './components/shop/shop.component';
import { LoginComponent } from './components/account/login.component';

import { SendEmailComponent } from './components/account/sendEmail.component';
import { CartsComponent } from './components/cart/cart.component';
import { UserComponent } from './user.component';
import { HeaderComponent } from './supportcomponents/header/header.component';
import { FooterComponent } from './supportcomponents/footer/footer.component';
import { FirstComponent } from './components/first/first.component';
import { BaseURLService } from './Service/BaseURL.service';
import { AccountService } from './Service/account.service';
import { AddressProfileService } from './Service/addressprofile.service';
import { AuthorService } from './Service/author.service';
import { CategoryService } from './Service/category.service';
import { EventService } from './Service/event.service';
import { InvoiceService } from './Service/invoice.service';
import { OrderService } from './Service/order.service';
import { OrderStatusService } from './Service/orderstatus.service';
import { PaymentMethodService } from './Service/paymentmethod.service';
import { ProductService } from './Service/product.service';
import { ProductImageService } from './Service/productimage.service';
import { PublisherService } from './Service/publisher.service';
import { RoleService } from './Service/role.service';
import { VoucherService } from './Service/voucher.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from './Service/cart.service';
import { ReloadService } from './Service/reload.service';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { SliderModule } from 'primeng/slider';
import { ProfileComponent } from './components/profile/profile.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/account/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CartsComponent,
    ShopComponent,
    LoginComponent,
    RegisterComponent,
    SendEmailComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    ProfileComponent,
    CheckoutComponent,
    AddressComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataViewModule,

    SliderModule
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
    OrderService,
    CartService,
    ReloadService
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
