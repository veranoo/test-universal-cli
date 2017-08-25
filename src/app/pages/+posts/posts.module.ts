import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/@init/posts.component';
import { PostsService } from './services/posts.service';
import { routing } from './posts.routing';
import { HttpModule } from '@angular/http';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    routing
  ],
  declarations: [PostsComponent, PostComponent],
  providers: [PostsService]
})
export class PostsModule { }
