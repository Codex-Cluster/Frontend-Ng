import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
