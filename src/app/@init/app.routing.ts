import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: 'app/pages/+home/home.module#HomeModule' },
  { path: 'about', loadChildren: 'app/pages/+about/about.module#AboutModule' },
  { path: 'posts', loadChildren: 'app/pages/+posts/posts.module#PostsModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});
