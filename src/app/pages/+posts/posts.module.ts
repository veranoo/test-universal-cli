import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/@init/posts.component';
import { PostsService } from './services/posts.service';
import { HttpModule } from '@angular/http';
import { PostComponent } from './components/post/post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    CommonModule
  ],
  declarations: [PostsComponent, PostComponent],
  providers: [PostsService]
})
export class PostsModule { }
