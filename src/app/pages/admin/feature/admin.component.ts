import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  addProductForm!: FormGroup;
  constructor(private fb: FormBuilder, private firestoreService: FirestoreService) {
    this.initForm();
  }

  initForm() {
    this.addProductForm = this.fb.group({
      name: 'Mask',
      model: 'Accessories',
      price: 12,
      rating: 4.7,
      total_rating: 331,
      image: '',
      color: 'Black',
      size: 'M',
      type: '',
    });
  }

  handleSubmit() {
    let product: Product = this.addProductForm.value;
    if (confirm('Do you want add this product?')) {
      this.firestoreService.addProduct(product).then(() => {
        alert('Add product successful!');
        this.addProductForm.reset();
      });
    }
  }
}
