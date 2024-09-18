import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
 import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimations } from '@angular/platform-browser/animations';

const firebaseConfig = {
  apiKey: "AIzaSyCM4d5FkA8KYcHpyvdGLZeEjlKbK7X8XBg",
  authDomain: "drinksuperstore9.firebaseapp.com",
  projectId: "drinksuperstore9",
  storageBucket: "drinksuperstore9.appspot.com",
  messagingSenderId: "1070528129816",
  appId: "1:1070528129816:web:ef7dbba85b22a98dbecc6d",
  measurementId: "G-SLSGGTLW71"
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()), // Provides routing with view transitions
    provideAnimations(), // Provides Angular animations
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // Initializes the Firebase app
    provideAuth(() => getAuth()), // Provides Firebase Authentication
     provideFirestore(() => getFirestore()), // Provides Firestore
    // provideStorage(() => getStorage()), // Provides Firebase Storage
    provideZoneChangeDetection({ eventCoalescing: true }), // Adds zone change detection optimization
  ],
};
