import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatCardModule,MatIconModule,MatButtonModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
