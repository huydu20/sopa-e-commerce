import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LayoutsModule } from '../layouts/layouts.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    LayoutsModule,
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}])
  ]
})
export class HomeModule { }
