import { Component } from '@angular/core';


import { AuthService } from '../auth.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService) {}



  signUp() {
    if (this.signUpForm.valid) {
      const { email, password } = this.signUpForm.value;

      this.authService.signUp(email as string, password as string)
        .catch((error: any) => {
          console.error("Error signing up:", error);
        });
      
    }
}

}
