import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

   constructor(private firestore: AngularFirestore) { }

   getAddresses(): Observable<any[]> {
    return this.firestore.collection('Address').valueChanges();
  }
  

}
