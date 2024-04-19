import { Component } from '@angular/core';
import { HttpService } from '../../services/Http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private httpServices:HttpService){}

  loginObj={
    email:'',
    password:''
  }

  LoginUser(){debugger
    console.log(this.loginObj);
     this.httpServices.loginUser(this.loginObj).subscribe(resp=>{
       alert('login success');
       console.log(resp);
       localStorage.setItem('token', resp.data.token)
      
     },(err)=>{
      console.log(err);
    })
    
   }

}
