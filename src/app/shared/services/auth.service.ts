import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, updateProfile, UserCredential } from "@angular/fire/auth";
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
}
