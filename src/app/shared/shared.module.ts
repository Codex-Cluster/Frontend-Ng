import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [PageNotFoundComponent, SearchFilterPipe],
  imports: [CommonModule, SharedRoutingModule],
  exports: [SearchFilterPipe],
})
export class SharedModule {}
