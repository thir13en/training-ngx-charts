import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Slide1Component } from './slides/slide1/slide1.component';

const routes: Routes = [
  {
    path: '', redirectTo: '1', pathMatch: 'full'
  },
  {
    path: '1', component: Slide1Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot( routes );
