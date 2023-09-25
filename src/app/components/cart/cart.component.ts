import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
product:Product=new Product();
constructor(private service:LoginService, private router:Router ){

}
public products: Observable <Product[]>=of([]);

ngOnInit(){
this.getAll();
}
getAll(){
this.products=this.service.getAllproducts();
}
productDetail(pId:number){
this.router.navigate(['productdetail',pId]);
console.log("abc");
}
}
