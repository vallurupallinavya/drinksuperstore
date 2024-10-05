import { Component, inject } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  authService = inject(AuthService);


  userSignUp(email: string, userName: string, password: string) {
    this.authService.register(email, userName, password).pipe(
      tap(() => {
        console.log('User registered successfully');
      }),
      catchError((error) => {
        console.error('Error occurred during sign-up:', error);
        return of(null);  // return a safe fallback observable
      })
    ).subscribe();
  }




}
