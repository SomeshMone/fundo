import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component';
//import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesUiMainComponent } from './components/notes-ui-main/notes-ui-main.component';
import { GetnotesComponent } from './components/getnotes/getnotes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-email', component: ForgotEmailComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'notes', component: GetnotesComponent }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
