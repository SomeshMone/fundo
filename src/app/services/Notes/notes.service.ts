import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { application } from 'express';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any
  constructor(private httpService:HttpService) {this.token=localStorage.getItem('token') }
  addNotes(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:7016/api/Notes/CreateNotes',reqData,true,header);
  }
  getNotes(){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:7016/api/Notes/GetAllNotes',true,header);
  }

  // trashNotes(reqData:any){
  //   let header={
  //     headers:new HttpHeaders({
  //       'Content-type':'application/json',
  //       'Authorization':'Bearer '+this.token
  //     })
  //   }
  //   return this.httpService.putService('https://localhost:7016/api/Notes/ToggleTrash?noteId=' + reqData
  //   ,reqData,true,header);
  // }
  trashNotes(reqData: any) {
     // Assuming noteId is part of reqData
     const noteId=reqData.notesId;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.postService(`https://localhost:7016/api/Notes/ToggleTrash?noteId=${noteId}`, reqData, true, header);
  }
  archievNotes(reqData:any){
    const noteId=reqData.notesId;
    const header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(`https://localhost:7016/api/Notes/ToggleArchive?noteId=${noteId}`, reqData, true, header);
  }
  

  
}
