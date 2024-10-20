import { Injectable } from '@angular/core';
import { Firestore, collectionData, CollectionReference } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore'; // Import the modular API
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: Firestore) {}


  getProducts(): Observable<any[]> {
    // Use the collection() method from firebase/firestore
    const productCollection = collection(this.firestore, 'Products') as CollectionReference<any>;

    // Use collectionData to retrieve the data and return as an Observable
    return collectionData(productCollection);
  }


}
