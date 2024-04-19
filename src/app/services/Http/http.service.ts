import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl="https://localhost:7016/api/User/";

  constructor(private httpClient:HttpClient) { }
  postService(url:string,reqData:any,token:boolean=false,httpOptions:any={}){
    return this.httpClient.post(url,reqData,token&&httpOptions)
  }

  postServiceReset(url:string,reqData:any,token:boolean=false,httpOptions:any={}){
    return this.httpClient.post(url,reqData,token&&httpOptions)
  }
  getService(url:string,token:boolean=true,httpOptions:any={}){
    return this.httpClient.get(url,token&&httpOptions)
  }
  putService(url:string,reqData:any,token:boolean=true,httpOptions:any={}){
    return this.httpClient.put(url,reqData,token&&httpOptions)
  }


   loginUser(data:any):Observable<any>{
     return this.httpClient.post(this.baseUrl+'Login',data);
   }

   registerUser(data2:any):Observable<any>{
     return this.httpClient.post(this.baseUrl+'Register',data2);
   }

}
