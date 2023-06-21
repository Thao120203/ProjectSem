import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './components/home/homeAdmin.component';
import { ProductAdminComponent } from './components/product/productAdmin.component';
import { AddProductAdminComponent } from './components/product/addproductAdmin.component';
import { LoginAdminComponent } from './components/account/loginAdmin.component';
import { RegisterAdminComponent } from './components/account/registerAdmin.component';
import { SendEmailComponent } from './components/account/sendEmail.component';


const routes: Routes = 
[
  {path: '',component:HomeAdminComponent , children:[
    {path: 'productAdmin',component: ProductAdminComponent },
    {path: 'addproduct',component: AddProductAdminComponent}
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
