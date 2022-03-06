import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, Route, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./modules/home/home.module").then((m) => m.HomeModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
