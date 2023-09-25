import { Component, OnInit } from '@angular/core';

import { Login } from 'src/app/model/Login';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
submitted=false;

login:Login=new Login();
msg='';
constructor(private service:LoginService, private router:Router){

}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

onSubmit(){
  console.log(this.login);
  this.service.loginuser(this.login).subscribe(data=>{
    console.log("Response received")
    this.router.navigate(['/userhome'])
    alert("Login successful");
  },error=>{
    console.log("Exception occured") 
    this.msg="Bad credentials,please enter valid data"
    alert("Login failed")}
  );
}
}
