import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/@init/about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AboutComponent],
  declarations: [AboutComponent]
})
export class AboutModule { }
