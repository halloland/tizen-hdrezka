import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FocusableDirective } from './directives/focusable.directive';

@NgModule({
  declarations: [
    AppComponent,
    FocusableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
