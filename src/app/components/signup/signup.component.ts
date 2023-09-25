import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Login } from 'src/app/model/Login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  

constructor(private service:LoginService, private router:Router){

}
submitted=false;
login:Login=new Login();
msg:any='';


onSubmit(){
this.submitted=true;
this.save();

}
save(){
  this.service.signupuser(this.login).subscribe((data)=>{
    console.log("Response received");
    alert("Registration SuccessFully")
    this.msg="Registration SuccessFully";
    this.router.navigate(['/lgn']);
  },(err)=>{ 
    console.log("Exception occured");
    this.msg=err.error;

  });
}
}
