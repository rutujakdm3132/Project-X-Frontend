import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Login } from './model/Login';
import { SignupComponent } from './components/signup/signup.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

import { UserhomeComponent } from './components/userhome/userhome.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path:'lgn',
    component:LoginComponent,
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'addproduct',
    component:ProductComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'productlist/:pId',
    component:ProductlistComponent
  },
  {
  path:'productdetail/:pId',
  component:ProductdetailsComponent

},

{
  path:'userhome',
  component:UserhomeComponent

},
{
  path:'contactus',
  component:ContactusComponent
},
{
  path:'cart',
  component:CartComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'homepage',
  component:HomepageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
