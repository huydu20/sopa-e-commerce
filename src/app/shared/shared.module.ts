import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [ModalComponent, CarouselComponent],
  imports: [CommonModule],
  exports: [ModalComponent, CarouselComponent],
})
export class SharedModule {}
