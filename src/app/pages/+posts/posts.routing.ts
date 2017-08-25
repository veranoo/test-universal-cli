import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/@init/posts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: ':postID', component: PostComponent,  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
