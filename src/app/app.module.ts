import { EnvironmentInjector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http'; 
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AuthModule } from '@angular/fire/auth';
import { Environment } from './environment/environment.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    Environment
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BsDropdownModule,
    MatButtonModule,
    AuthModule,
    HttpClientModule,
    
    provideFirebaseApp(() => initializeApp(Environment.firebaseConfig)),

    AuthModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


