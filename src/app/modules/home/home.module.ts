import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DetailComponent } from './detail/detail.component';
import { MatButtonModule } from '@angular/material/button';
import { ChooserComponent } from './detail/chooser/chooser.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    ChooserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxSkeletonLoaderModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class HomeModule { }
