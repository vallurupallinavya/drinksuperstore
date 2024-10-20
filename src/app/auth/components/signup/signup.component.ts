import { Component, inject, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';
import { AddressService } from '../../../shared/services/address.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  authService = inject(AuthService);
  addressService = inject(AddressService);
  addresses!: any[];


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

  // test get address

  ngOnInit() {
    //this.postData();  dont uncomment  they are used to
    this.addressService.getAddresses().subscribe(data => {
      this.addresses = data;
      console.log("Addresses:", this.addresses);
    });
  }

  // productData = []

  // postData() {
  //   this.addressService.addMultipleProducts(this.productData)
  //     .then(() => {
  //       console.log("Products added successfully");
  //     })
  //     .catch(error => {
  //       console.error("Error adding products:", error);
  //     });
  // }
  

}




