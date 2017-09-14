import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/+home/components/@init/home.component';
import { AboutComponent } from '../pages/+about/components/@init/about.component';
import { PostsComponent } from '../pages/+posts/components/@init/posts.component';
import { PostComponent } from '../pages/+posts/components/post/post.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:postID', component: PostComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
