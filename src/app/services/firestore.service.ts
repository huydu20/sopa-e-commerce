import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private static FIRESTORE_PRODUCTS_KEY = 'products';
  constructor(private firestore: Firestore) {}

  addProduct(product: Product) {
    const productRef = collection(this.firestore, FirestoreService.FIRESTORE_PRODUCTS_KEY);
    return addDoc(productRef, product);
  }

  getProduct(id: number): Observable<Product> {
    const productRef = collection(
      this.firestore,
      FirestoreService.FIRESTORE_PRODUCTS_KEY + `/${id}`
    );
    return collectionData(productRef, { idField: 'id' }) as Observable<Product>;
  }

  getAllProduct(): Observable<Product[]> {
    const productsRef = collection(this.firestore, FirestoreService.FIRESTORE_PRODUCTS_KEY);
    return collectionData(productsRef, { idField: 'id' }) as Observable<Product[]>;
  }

  updateProduct(id: string, product: Product) {
    const productRef = doc(this.firestore, FirestoreService.FIRESTORE_PRODUCTS_KEY + id);
    return updateDoc(productRef, { ...product });
  }

  deleteProduct(id: string) {
    const productRef = doc(this.firestore, FirestoreService.FIRESTORE_PRODUCTS_KEY + id);
    return deleteDoc(productRef);
  }
}
