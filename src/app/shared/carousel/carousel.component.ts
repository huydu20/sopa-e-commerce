import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() listCarousel: any = [];

  slideIndex = 1;

  changeSlide(idx: number) {
    this.slideIndex = idx + 1;
  }
}
