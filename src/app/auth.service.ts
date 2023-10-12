

import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Environment } from './environment/environment.component';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut } from '@firebase/auth';
  signOut 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  app: any;
  auth: any;
  
  constructor() {
    this.app = initializeApp(Environment.firebaseConfig)
    this.auth = getAuth(this.app);

   }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}