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
import { ListCategoryComponent } from './components/category/listCategory.component';
import { AddOrderStatusComponent } from './components/orderstatus/addOrderStatus.component';
import { AddPaymentMethodComponent } from './components/paymentmethod/addPaymentMethod.component';
import { AddPublisherComponent } from './components/publisher/addPublisher.component';
import { AddVoucherComponent } from './components/voucher/addVoucher.component';
import { AddRoleComponent } from './components/role/addRole.component';
import { EditCategoryComponent } from './components/category/edit/editCategory.component';
import { ListOrderStatusComponent } from './components/orderstatus/listOrdersStatus/listOrderStatus.component';


const routes: Routes =
[
  {path: '',component:HomeAdminComponent , children:[
    {path: 'productAdmin',component: ProductAdminComponent },
    {path: 'addproduct',component: AddProductAdminComponent},

    {path: 'addcategory',component: AddCategoryComponent},
    {path: 'editcategory',component: EditCategoryComponent},
    {path: 'listcategory',component: ListCategoryComponent},


    {path: 'addauthor',component: AddAuthorComponent},
    {path: 'listauthor',component: ListAuthorComponent},

    {path: 'addorderstatus',component: AddOrderStatusComponent},
    {path: 'listorderstatus',component: ListOrderStatusComponent},

    {path: 'addpaymentmethod',component: AddPaymentMethodComponent},
    {path: 'listpaymentmethod',component: ListCategoryComponent},

    {path: 'addpublisher',component: AddPublisherComponent},
    {path: 'listpublisher',component: ListCategoryComponent},

    {path: 'addrole',component: AddRoleComponent},
    {path: 'listrole',component: ListCategoryComponent},

    {path: 'addvoucher',component: AddVoucherComponent},
    {path: 'listvoucher',component: ListCategoryComponent},

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
