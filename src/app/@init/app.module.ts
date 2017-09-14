import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/app.component';
import { routing } from './app.routing';
import { HomeModule } from '../pages/+home/home.module';
import { AboutModule } from '../pages/+about/about.module';
import { PostsModule } from '../pages/+posts/posts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule,
    PostsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
