import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface LoginError {
    message: string;
    code?: number; 
 
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService) {}
  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email as string;
      const password = this.loginForm.value.password as string;
  
      console.log("Email:", email);
      console.log("Password:", password);
  
      if (email && password) {
        this.authService.login(email, password)
          .then(res => {
            console.log("Login successful");
          })
          .catch((error: LoginError | null) => { 
            if (error) {
              console.error("Error logging in:", error);
            } else {
              console.error("An unknown error occurred.");
            }
          }); 
      }
    }
  }
  


}


