import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
baseUrl='http://localhost:8082'
  constructor(private http:HttpClient) { 

  }

signupuser(login:Object):Observable<Object>{
return this.http.post(`${this.baseUrl}/createUser`,login);
  }
  
signupseller(seller:Object):Observable<Object>{
  return this.http.post(`${this.baseUrl}/createSeller`,seller);
    }

loginuser(login:Object):Observable<object>{
  console.log(login);
  return this.http.post(`${this.baseUrl}/loginUser`,login);
}
loginseller(seller:Object):Observable<object>{
  console.log(seller);
  return this.http.post(`${this.baseUrl}/loginSeller`,seller);
}
addproduct(product:Object):Observable<object>{
return this.http.post(`${this.baseUrl}/addproduct`,product)
}
getAllproducts():any{
  return this.http.get(`${this.baseUrl}/getall/products`);
  }
  getOneproduct(pId:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/getproduct/${pId}`);
  }
 

}
