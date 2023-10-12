import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout().then(() => {
      console.log("Logged out successfully");
      // Navigate to login or any other page if needed
    }).catch(error => {
      console.error("Error logging out: ", error);
    });
  }
}