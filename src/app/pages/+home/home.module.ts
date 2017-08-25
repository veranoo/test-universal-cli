import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/@init/home.component';
import { routing } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
