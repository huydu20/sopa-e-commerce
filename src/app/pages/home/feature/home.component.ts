import { Component } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  productList!: Observable<any>;
  shoes: Product[] = [];
  accessories: Product[] = [];
  listCarousel = [
    {
      src: '../../../../assets/images/carousel1.png',
      alt: 'carousel1',
    },
    {
      src: '../../../../assets/images/carousel2.jpg',
      alt: 'carousel2',
    },
    {
      src: '../../../../assets/images/carousel3.jpg',
      alt: 'carousel3',
    },
    {
      src: '../../../../assets/images/carousel4.jpg',
      alt: 'carousel4',
    },
    {
      src: '../../../../assets/images/carousel5.jpg',
      alt: 'carousel5',
    },
    {
      src: '../../../../assets/images/carousel6.jpg',
      alt: 'carousel6',
    },
    {
      src: '../../../../assets/images/carousel7.jpg',
      alt: 'carousel7',
    },
  ];

  listEveryday = [
    {
      src: '../../../../assets/images/home_everyday.png',
      alt: 'home_everyday.png',
    },
    {
      src: '../../../../assets/images/home_everyday2.png',
      alt: 'home_everyday2.png',
    },
    {
      src: '../../../../assets/images/home_everyday3.png',
      alt: 'home_everyday3.png',
    },
    {
      src: '../../../../assets/images/home_everyday4.png',
      alt: 'home_everyday4.png',
    },
  ];

  constructor(private firestoreService: FirestoreService) {
    this.productList = this.firestoreService.getAllProduct();
    this.productList.subscribe((data: Product[]) => {
      data.forEach((product) => {
        if (product.type === 'shoes') {
          this.shoes.push(product);
        } else if (product.type === 'accessories') {
          this.accessories.push(product);
        }
      });
      console.log(data);
      console.log(this.shoes);
      console.log(this.accessories);
    });
  }
}
