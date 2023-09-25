import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { ProductComponent } from './components/product/product.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

import { UserhomeComponent } from './components/userhome/userhome.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    SignupComponent,
    ProductComponent,
    ProductlistComponent,
    ProductdetailsComponent,

    UserhomeComponent,
     ContactusComponent,
     HomepageComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
