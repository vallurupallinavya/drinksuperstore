import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);

  userSign(email: string, password: string) {
    // for testing email :testsign@gmail.com , password: testsign@123
    this.authService
      .userSign(email, password)
      .pipe(
        tap(() => {
          console.log('User signed in successfully');
        }),
        catchError((error) => {
          console.error('Error occurred during sign-in:', error);
          // Handle the error, e.g., return an observable with an empty result or a user-friendly message
          return of(null); // return a safe fallback observable
        })
      )
      .subscribe();
  }
}
