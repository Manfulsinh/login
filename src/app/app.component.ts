import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout().then(() => {
      console.log("Logged out successfully");
      this.router.navigate(['/login']); 
    }).catch(error => {
      console.error("Error logging out: ", error);
    
    });
  }
}
