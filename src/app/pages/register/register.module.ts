import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './feature/register.component';
import { LayoutsModule } from '../../layouts/layouts.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    LayoutsModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: RegisterComponent }]),
  ],
})
export class RegisterModule {}
