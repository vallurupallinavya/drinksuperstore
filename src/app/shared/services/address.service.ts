import { Injectable } from '@angular/core';
import { Firestore, collectionData, CollectionReference } from '@angular/fire/firestore';
import { collection, doc, writeBatch } from 'firebase/firestore'; // Import the modular API
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
 
  getCategories(): Observable<any[]> {
    // Use the collection() method from firebase/firestore
    const categoriesCollection = collection(this.firestore, 'Categories') as CollectionReference<any>;

    // Use collectionData to retrieve the data and return as an Observable
    return collectionData(categoriesCollection);
  }


  getBrands(): Observable<any[]> {
    // Use the collection() method from firebase/firestore
    const brandCollection = collection(this.firestore, 'Brands') as CollectionReference<any>;

    // Use collectionData to retrieve the data and return as an Observable
    return collectionData(brandCollection);
  }

  addMultipleProducts(products: any[]): Promise<void> {
    const batch = writeBatch(this.firestore); // Using the modular writeBatch method

    products.forEach((product) => {
      const docRef = doc(this.firestore, `Products/${product.id}`); // Generate a document reference for each product
      batch.set(docRef, product); // Add the product to the batch
    });

    // Commit the batch write
    return batch.commit();
  }
}
