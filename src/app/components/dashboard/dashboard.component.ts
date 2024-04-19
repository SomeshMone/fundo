import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/Http/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private router:Router, private matDialog:MatDialog, private activeRoute:ActivatedRoute, private service:HttpService) { }

  profileDailogvalue=false;
  //router: any;
openDialog(){
  this.profileDailogvalue=true;
}
CloseProfileDialog(){
  this.profileDailogvalue=false;
}
closeoverlay(e:any){
  if(e.target.classList.contains('ProfileDialog')){
    this.profileDailogvalue=false;
  }
}
logout(){
  this.router.navigateByUrl('');
}

}
