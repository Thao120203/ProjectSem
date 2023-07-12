import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartsComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/account/login.component';
import { RegisterComponent } from './components/account/register.component';
import { SendEmailComponent } from './components/account/sendEmail.component';
import { FirstComponent } from './components/first/first.component';


const routes: Routes =[

  {path : '',component:HomeComponent,children:[
    {path : 'product',component: ProductComponent},
    {path : 'cart',component:CartsComponent},
    {path : 'categories',component:ShopComponent},
    {path : '',component:FirstComponent}
  ]},

  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'sendemail',component:SendEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
