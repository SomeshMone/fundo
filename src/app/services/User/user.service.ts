import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  constructor(private httpService:HttpService) { }

  // register(reqData:any){
  //   let header={
  //     headers:new HttpHeaders({
  //       'Content-type':'application/json',
  //       //Authorization:'token'
  //     })
  //   }
  //   return this.httpService.postService('/User/Register',reqData,false,header)
  // }
  // login(reqData:any){
  //   let header={
  //     headers:new HttpHeaders({
  //       'Content-type':'application/json',
  //       //Authorization:'token'
  //     })
  //   }
  //   return this.httpService.postService('User/Login',reqData,false,header)
  // }
}
