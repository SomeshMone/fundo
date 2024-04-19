import { Component } from '@angular/core';
import { HttpService } from '../../services/Http/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  ngOnInit(): void {
  }
  constructor(private services:HttpService){}
  regObj = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  confirmPassword = '';
  isFormSubmitted = false;
  registrationError = '';

  registerFunction() {debugger
    this.isFormSubmitted = true;
    
    if (this.confirmPassword === this.regObj.password) {
      this.services.registerUser(this.regObj).subscribe(
        (res) => {
          console.log(res);
          if (res.success) {
            alert('Registration successful');
            console.log(res);
          } else {
            alert('Registration failed');
          }
        },
        (error) => {
          this.registrationError = error.message || 'Registration failed';
          console.error( error);
        }
      );
    } else {
      this.registrationError = 'Passwords do not match';
    }
  }
}

