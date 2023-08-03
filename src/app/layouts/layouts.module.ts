import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [
    ComponentsModule,
    CommonModule,
  ],
  exports: [CommonModule,DefaultLayoutComponent]
})


export class LayoutsModule { }
