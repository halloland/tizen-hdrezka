import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FocusableDirective } from './directives/focusable.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './modules/home/home/home.component';
import { DetailComponent } from './modules/home/detail/detail.component';
import { ChooserComponent } from './modules/home/detail/chooser/chooser.component';
import { PlayerComponent } from './modules/home/player/player.component';
import { StoreModule } from '@ngrx/store';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FocusableDirective,
    HomeComponent,
    DetailComponent,
    ChooserComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    MatButtonModule,
    MatDialogModule,
    StoreModule.forRoot({}, {}),
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
