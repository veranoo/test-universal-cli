import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/@init/posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
