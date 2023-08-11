import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProductCardComponent],
  imports: [SharedModule, FontAwesomeModule, CommonModule],
  exports: [HeaderComponent, FooterComponent, ProductCardComponent],
})
export class ComponentsModule {}
