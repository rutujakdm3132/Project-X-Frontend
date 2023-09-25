import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private service:LoginService, private router:Router){}
  submitted=false;
product:Product=new Product();

onSubmit(){
  this.submitted=true;
  this.save();

}
save(){
  this.service.addproduct(this.product).subscribe();
}
}
