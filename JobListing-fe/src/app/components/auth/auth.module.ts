import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBYF7Wh5BZux5Kg5sThfn8ammLHpXApUNk",
      authDomain: "job-listing-ea138.firebaseapp.com",
      projectId: "job-listing-ea138",
      storageBucket: "job-listing-ea138.appspot.com",
      messagingSenderId: "129416428083",
      appId: "1:129416428083:web:97f4249a9d5ee366d40146",
      measurementId: "G-G3J2MZ4P4X"
    }),
  ],

  declarations: [LoginComponent]
})
export class AuthModule { }
