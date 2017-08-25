import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/@init/about.component';

const routes: Routes = [
  { path: '', component: AboutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
