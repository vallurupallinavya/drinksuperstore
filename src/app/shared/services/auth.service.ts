import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, UserCredential } from "@angular/fire/auth";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firebaseAuth: Auth) {}

  register(email: string, username: string, password: string): Observable<void> {
    const createUserPromise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
      .then((userCredential: UserCredential) => {
        // Update the user's profile with the display name
        return updateProfile(userCredential.user, { displayName: username });
      });

    // Convert the promise to an observable
    return from(createUserPromise);
  }

  userSign(email: string, password: string): Observable<void> {
    const signUser = signInWithEmailAndPassword(this.firebaseAuth, email, password)
      .then((userCredential: UserCredential) => {
        // Handle successful sign-in if necessary
        console.log('User signed in successfully');
      })
      .catch((error) => {
        // Handle error here
        console.error('Error signing in:', error);
      });
  
    // Convert the promise to an observable
    return from(signUser);
  }
}
