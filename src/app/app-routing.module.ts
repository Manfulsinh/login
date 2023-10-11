import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login',
   component: LoginComponent },

   { path: 'sign-up', 
   component: SignUpComponent },

  {
    path:'home',
    component:HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
