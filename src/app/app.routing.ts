import {RouterModule, Routes} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {
    path: '1', component: HeaderComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot( routes );
