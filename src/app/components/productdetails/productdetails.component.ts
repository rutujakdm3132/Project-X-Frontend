import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  pId:number=0;
product:Product=new Product();

constructor(private route:ActivatedRoute, private service:LoginService,
   private router:Router){

}

ngOnInit(){
  this.product=new Product();
  this.pId=this.route.snapshot.params['pId'];
  this.service.getOneproduct(this.pId).subscribe((data)=>{
  console.log(data);
  this.product=data;
  console.log("sfsfs");
})
}

list(){
  this.router.navigate(['productlist/pId']);
}
}
