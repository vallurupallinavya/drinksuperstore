import { Injectable } from '@angular/core';
import { Firestore, collectionData, CollectionReference } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore'; // Import the modular API
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private firestore: Firestore) {}

  // Fetch Address collection data
  getAddresses(): Observable<any[]> {
    // Use the collection() method from firebase/firestore
    const addressCollection = collection(this.firestore, 'Address') as CollectionReference<any>;

    // Use collectionData to retrieve the data and return as an Observable
    return collectionData(addressCollection);
  }
}
