import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);

  public title = 'hello store';

  ngOnInit(): void {}

  userSign(email: string, password: string) {  // for testing email :testsign@gmail.com , password: testsign@123
    this.authService.userSign(email, password).pipe(
      tap(() => {
        console.log('User signed in successfully');
      }),
      catchError((error) => {
        console.error('Error occurred during sign-in:', error);
        // Handle the error, e.g., return an observable with an empty result or a user-friendly message
        return of(null);  // return a safe fallback observable
      })
    ).subscribe();
  }
  
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
