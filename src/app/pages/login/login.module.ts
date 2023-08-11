import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './feature/login.component';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from '../../layouts/layouts.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LayoutsModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ],
})
export class LoginModule {}
