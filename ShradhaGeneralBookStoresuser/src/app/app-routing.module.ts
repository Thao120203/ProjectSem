import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartsComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/account/login.component';
import { SendEmailComponent } from './components/account/sendEmail.component';
import { FirstComponent } from './components/first/first.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/account/register.component';
import { HistoryCartsComponent } from './components/historyCart/historyCart.component';
import { ProductForPublisherComponent } from './components/productShow/forPublisher/productForPublisher.component';
import { ProductForAuthorComponent } from './components/productShow/forAuthor/productForAuthor.component';
import { ListAuthorComponent } from './components/author/listAuthor.component';
import { ListPublisherComponent } from './components/publisher/listpublisher.component';
import { CheckOutPayComponent } from './components/checkoutpay/checkoutpay.component';
import { ActiveComponent } from './components/account/active/active.component';


const routes: Routes =[

  {path : 'home',component:HomeComponent},
  {path : 'product',component: ProductComponent},
  {path : 'cart',component:CartsComponent},
  {path : 'categories',component:ShopComponent},
  {path : 'authors',component:ProductForAuthorComponent},
  {path : 'publishers',component:ProductForPublisherComponent},
  {path : 'listpublisher',component:ListPublisherComponent},
  {path : 'authors',component:ProductForAuthorComponent},
  {path : 'listauthor',component:ListAuthorComponent},


  {path : '',component:FirstComponent},
  {path : 'first',component:FirstComponent},

  {path : 'profile',component:ProfileComponent},
  {path : 'checkout',component:CheckoutComponent},
  {path : 'checkoutpay',component:CheckOutPayComponent},

  {path : 'address',component:AddressComponent},
  {path : 'contact',component:ContactComponent},
  {path: 'login',component:LoginComponent},
  {path: 'sendemail',component:SendEmailComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'historycart',component:HistoryCartsComponent},
  {path: 'Active',component:ActiveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
