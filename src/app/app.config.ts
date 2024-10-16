import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
 import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../environments/environment'; 
import { getFunctions, provideFunctions } from '@angular/fire/functions';



export const appConfig: ApplicationConfig = {
  providers: [
    
    provideRouter(routes, withViewTransitions()), // Provides routing with view transitions
    provideAnimations(), // Provides Angular animations
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFunctions(() => getFunctions()),  // Initializes the Firebase app
    provideAuth(() => getAuth()), // Provides Firebase Authentication
     provideFirestore(() => getFirestore()), // Provides Firestore
    // provideStorage(() => getStorage()), // Provides Firebase Storage
    provideZoneChangeDetection({ eventCoalescing: true }), provideAnimationsAsync(), provideAnimationsAsync(), // Adds zone change detection optimization
  ],
};
