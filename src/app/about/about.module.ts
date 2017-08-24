import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './about.routing';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  exports: [AboutComponent],
  declarations: [AboutComponent]
})
export class AboutModule { }
