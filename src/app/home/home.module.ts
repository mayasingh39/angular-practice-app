import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]), // Route inside HomeModule
  ],
  exports: []
})
export class HomeModule { }
