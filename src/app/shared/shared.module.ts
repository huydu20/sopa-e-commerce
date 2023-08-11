import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ModalComponent, CarouselComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [ModalComponent, CarouselComponent, ButtonComponent],
})
export class SharedModule {}
