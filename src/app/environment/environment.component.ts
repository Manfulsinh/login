
import { Injectable, Component } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class Environment {
  static firebaseConfig = {
    apiKey: "AIzaSyD6rH55dhGsGYYtxSj-Qy4HA4QrOX50vB8",
    authDomain: "angular-signup-c3f1f.firebaseapp.com",
    projectId: "angular-signup-c3f1f",
    storageBucket: "angular-signup-c3f1f.appspot.com",
    messagingSenderId: "907715338743",
    appId: "1:907715338743:web:92cc3a52bfd52c742b4ef2"
  };

  constructor() {
    firebase.initializeApp(Environment.firebaseConfig);
  }
}
