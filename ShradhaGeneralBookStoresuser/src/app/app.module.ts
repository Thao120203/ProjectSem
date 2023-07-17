import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
import { HistoryCartsComponent } from './components/historyCart/historyCart.component';
import { SendService } from './Service/send.service';
import { ProductForPublisherComponent } from './components/productShow/forPublisher/productForPublisher.component';
import { ProductForAuthorComponent } from './components/productShow/forAuthor/productForAuthor.component';
import { CardModule } from 'primeng/card';
import { ListAuthorComponent } from './components/author/listAuthor.component';
import { TableModule } from 'primeng/table';
import { ListPublisherComponent } from './components/publisher/listpublisher.component';
import { SendDataCartService } from './Service/senddatacart.service';
import { AddressService } from './Service/address.service';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NgxPayPalModule } from 'ngx-paypal';
import { CheckOutPayComponent } from './components/checkoutpay/checkoutpay.component';
import { OrderServiceDetail } from './Service/orderdetail.service';
import { ActiveComponent } from './components/account/active/active.component';



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
    ContactComponent,
    HistoryCartsComponent,
    ProductForPublisherComponent,
    ProductForAuthorComponent,
    ListAuthorComponent,
    ListPublisherComponent,
    CheckOutPayComponent,
    ActiveComponent,

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
    CardModule,
    SliderModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    InputTextModule,
    RadioButtonModule,
    NgxPayPalModule,

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
    ReloadService,
    SendService,
    SendDataCartService,
    AddressService,
    OrderServiceDetail
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
